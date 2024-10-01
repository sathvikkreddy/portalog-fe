import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
    name: string;
    id: string;
}

interface AuthContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType>({user:null, setUser: ()=>{}});

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [user, setUser] = useState<User | null>(null);

    useEffect(()=>{
        const token = localStorage.getItem("authToken");
        if(token){
            //get user details and setUser
            setUser({name:"sathvik", id:"EMP001"})
        }
    },[])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
