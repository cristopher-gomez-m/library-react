interface initialForm{
    email:string;
    password:string;
}

interface validatedForm{
    email? : string
    password?:string
}

interface Function{
    (initialForm:initialForm):{}
}

type ValidationFunctions = {
    [fieldName: string]: (value: string) => string;
};