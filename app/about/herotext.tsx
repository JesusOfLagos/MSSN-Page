import { MdArrowForward } from "react-icons/md"
import Btn from "../components/atoms/btn"

export const HeroText = () => {
    return (
        <div className="-mt-10 m-4">
            <h1 className="font-bold text-5xl mb-2">An Association that Cares 
            <br />
            for your Needs</h1>
            <p className="py-2 text-gray-600">Human makes a society. There is no us without you <br /> and that’s what makes your need our utmost concern.</p>
            <Btn
                className="font-bold px-6 py-4"
                styles={{
                    margin: "1rem -2rem",
                }}>
                Join Our Members List.
                <MdArrowForward size={20} />
            </Btn>
        </div>
    )
}