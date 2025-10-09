'use server';

import { auth } from "@/lib/auth";

export const signIn = async () => {
    await auth.api.signInEmail({
        body: {
        email: "string",
        password: "string",
        }
        
    })

};


export const signUp = async () => {
    await auth.api.signUpEmail({
        body: {
        email: "string",
        password: "string",
        name: "string",
        }
        
    })

};