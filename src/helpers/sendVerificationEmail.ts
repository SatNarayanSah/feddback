import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode: string
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Feedback | Verification Code',
            react: VerificationEmail({username, otp:verifyCode})
        });
        return{success: true, message:"Verification send successfully"}
    } catch (emailError) {
        console.error("Erro sending verification email", emailError)
        return{success: false, message:"Failed to send dverification emails"}
        
    }
}

