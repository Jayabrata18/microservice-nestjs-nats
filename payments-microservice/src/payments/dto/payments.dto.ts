import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreatePaymentDto {
    @IsNotEmpty()
    userId: number;
    @IsNumber()
    amount: number;
    // currency: string;
    // description: string;
    // cardNumber: string;
    // cardHolder: string;
    // expiryDate: string;
    // cvv: string;
    // email: string;
    // phone: string;
    // address: string;
    // city: string;
    // country: string;
    // zip: string;
    // state: string;
    // ip: string;
    // fingerprint: string;
    // userAgent: string;
}