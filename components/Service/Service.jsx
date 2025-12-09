import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Service() {
    return (
        <section id="services" className="bg-white py-20 px-6">
            <SectionTitle
                title="Our Solar Services"
                subtitle="High-quality Solar Water Heaters & PV Panel Solutions"
            />

            <div className="max-w-7xl mx-auto space-y-28">

                {/* ---------------------- SOLAR WATER HEATER ---------------------- */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT — 3 IMAGE BLOCK */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Small Left Image 1 */}
                        <div className="col-span-1">
                            <Image
                                src="/img/swa2.jpg"
                                alt="Solar water heater"
                                width={500}
                                height={500}
                                className="rounded-2xl object-cover h-64 w-full shadow-md"
                            />
                        </div>

                        {/* Tall Right Image */}
                        <div className="row-span-2 col-span-1">
                            <Image
                                src="/img/swa3.webp"
                                alt="Solar heater tall"
                                width={500}
                                height={800}
                                className="rounded-2xl object-cover h-full w-full shadow-md"
                            />
                        </div>

                        {/* Small Left Image 2 */}
                        <div className="col-span-1">
                            <Image
                                src="/img/swa1.jpg"
                                alt="Solar water heater"
                                width={500}
                                height={500}
                                className="rounded-2xl object-cover h-64 w-full shadow-md"
                            />
                        </div>
                    </div>

                    {/* RIGHT — INFORMATION */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Solar Water Heaters (SWHs)
                        </h3>

                        <p className="text-gray-700 mb-6">
                            We provide advanced and energy-efficient solar water heaters for
                            residential, commercial & industrial use.
                        </p>

                        <ul className="space-y-3 text-gray-700">
                            <li className="flex gap-2"><FaCheckCircle className="text-green-500 mt-1" />High heat absorption technology.</li>
                            <li className="flex gap-2"><FaCheckCircle className="text-green-500 mt-1" />Long-lasting material quality.</li>
                            <li className="flex gap-2"><FaCheckCircle className="text-green-500 mt-1" />Saves 70–90% electricity cost.</li>
                            <li className="flex gap-2"><FaCheckCircle className="text-green-500 mt-1" />Best for homes, hotels & industries.</li>
                        </ul>
                    </div>
                </div>

                {/* ---------------------- SOLAR PV SYSTEM ---------------------- */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* RIGHT — 3 IMAGE BLOCK (REVERSED) */}
                    <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
                        {/* Small Left Image 1 */}
                        <div className="col-span-1">
                            <Image
                                src="/img/spa1.jpg"
                                alt="Solar PV"
                                width={500}
                                height={500}
                                className="rounded-2xl object-cover h-64 w-full shadow-md"
                            />
                        </div>

                        {/* Tall Right Image */}
                        <div className="row-span-2 col-span-1">
                            <Image
                                src="/img/sp1.jpg"
                                alt="Solar PV tall"
                                width={500}
                                height={800}
                                className="rounded-2xl object-cover h-full w-full shadow-md"
                            />
                        </div>

                        {/* Small Left Image 2 */}
                        <div className="col-span-1">
                            <Image
                                src="/img/spa2.jpg"
                                alt="Solar PV system"
                                width={500}
                                height={500}
                                className="rounded-2xl object-cover h-64 w-full shadow-md"
                            />
                        </div>
                    </div>

                    {/* LEFT — INFORMATION */}
                    <div className="order-2 md:order-1">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Solar PV Panel Systems
                        </h3>

                        <p className="text-gray-700 mb-6">
                            We design and install complete solar PV solutions for homes,
                            businesses & industries.
                        </p>

                        <ul className="space-y-3 text-gray-700">
                            <li className="flex gap-2"><FaCheckCircle className="text-green-500 mt-1" />Customized on-grid / off-grid systems.</li>
                            <li className="flex gap-2"><FaCheckCircle className="text-green-500 mt-1" />High-efficiency tier-1 solar panels.</li>
                            <li className="flex gap-2"><FaCheckCircle className="text-green-500 mt-1" />Smart monitoring & maintenance.</li>
                            <li className="flex gap-2"><FaCheckCircle className="text-green-500 mt-1" />Government subsidy assistance.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
