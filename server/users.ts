'use server';

import { auth } from "@/lib/auth";

export const signIn = async () => {
    await auth.api.signInEmail({
        body: {
        email: "hemantrana356@gmail.com",
        password: "Hemant@12345",
        }
        
    })

};


export const signUp = async () => {
    await auth.api.signUpEmail({
        body: {
        email: "hemantrana356@gmail.com",
        password: "Hemant@12345",
        name: "Hemant Singh",
        }
        
    })

};