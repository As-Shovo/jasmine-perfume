import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import intializeFirebase from '../Pages/Login/Firebase/firebase.init';
import { useEffect } from 'react';

intializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);

                // redirect 
                const destination = location?.state.from || '/';
                history.push(destination);

                saveUser(result.user?.email, result.user?.displayName, "PUT")



            })
            .finally(() => setIsLoading(false));
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // ...
            } else {
                // User is signed out

            }
            setIsLoading(false)
        });
    }, []);

    useEffect(()=>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(result =>{
            setAdmin(result.admin)
        })
    },[user.email])



    const emailPasswordCreateUser = (email, password, name, photoUrl, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);

                updateUser(name, photoUrl);

                history.push('/');


                // -----------------
                //save user to the database
                saveUser(email, name, "POST");

                // ...
            })
            .catch((error) => {

                console.log(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    };

    const signInEmailPasswordUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user)
                // ...

                const destination = location?.state.from || '/';
                history.push(destination);


            })
            .catch((error) => {

                console.log(error.message)
            })
            .finally(() => setIsLoading(false));
    }


    const updateUser = (name, photoUrl) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    };



    // send user Data base 
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        // setIsLoading(true);

        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                // setIsLoading(false);
            })
    };


    // logout
    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser('')
        }).catch((error) => {
            // An error happened.
        });
    }



    return {
        user,
        admin,
        signInUsingGoogle,
        handleSignOut,
        emailPasswordCreateUser,
        signInEmailPasswordUser,
        isLoading
    };
};

export default useFirebase;