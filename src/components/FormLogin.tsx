import { Button } from "./Button"

export const  FormLogin = () => {
    return (
        <div className="flex flex-row lg:flex-col gap-2">
            <Button label="Log in"/>
            <Button label="Register"/>
        </div>
    )
}