import { useState } from "react";
import { GrFormDown, GrHome, GrFormUp } from "react-icons/gr";

export function SearchProperty() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div
            className="mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        >
            <GrHome />
            <div>
                <span>Propiedad</span>
                <p className="text-xs">Selecciona el tipo de propiedad</p>
            </div>
            {isOpen ? (
                <GrFormUp />
            ) : (
                <GrFormDown />
            )}

            {isOpen && (
                <div className="absolute top-[70px] bg-white z-50 px-4 py-4 rounded-lg shadow-light w-[230px] left-0">
                    <p>Casa</p>
                    <p>Chalet</p>
                    <p>Piso</p>
                </div>
            )}
        </div>
    )
}