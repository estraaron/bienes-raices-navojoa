import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";

export function SearchPriceRange() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <GrTag />
            <div>
                <span>Rango de precio</span>
                <p className="text-xs">Selecciona tu rango de precio</p>
            </div>
            {isOpen ? (
                <GrFormUp />
            ) : (
                <GrFormDown />
            )}
            {isOpen && (
                <div className="absolute top-[70px] bg-white z-50 px-4 py-4 rounded-lg shadow-light w-[230px] left-0">
                    <p>Cualquier rango</p>
                    <p>20.000 - 30.0000</p>
                    <p>13.000 - 20.0000</p>
                    <p>10.000 - 13.0000</p>
                    <p>30.000 - 50.0000</p>
                </div>
            )}
        </div>
    )
}
