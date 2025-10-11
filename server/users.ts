'use server';

import { auth } from "@/lib/auth";
// import { success } from "zod";

export const signIn = async (email: string, password: string) => {
   try {
    await auth.api.signInEmail({
        body: {
            email,
            password,
        }
        
    })
    return{
        success: true,
        message: "Signed in successfully",
    }
   }catch (error) {
     const e = error as { message: string };
     return{
        success: false,
        message: e.message || "Something went wrong",
     }
   }  
};


export const signUp = async (username: string, email: string, password: string) => {
try {
    await auth.api.signUpEmail({
        body: {
            name: username,
            email,
            password,
        }
        
    })

    return{
        success: true,
        message: "Signed up successfully",
    }

}  catch (error) {
        const e = error as { message: string };
        return{
            success: false,
            message: e.message || "Something went wrong",
        }
    }

};