import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
    question: string;
    answer: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="flex w-full items-center justify-between text-left focus:outline-none"
                onClick={onClick}
            >
                <span className="text-lg font-medium text-gray-900">{question}</span>
                {isOpen ? (
                    <FontAwesomeIcon icon={faChevronUp} className="w-5 h-5 text-primary" />
                ) : (
                    <FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 text-gray-500" />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="mt-4 text-gray-600 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqData = [
        {
            question: "¿Dónde puedo comprar?",
            answer: (
                <div className="space-y-3">
                    <p>Somos una tienda 100% online, por eso tenemos a tu disposición todas las herramientas para que puedas hacer tu compra con seguridad.</p>
                    <p>Puedes comprar a través de nuestros siguientes canales:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>INSTAGRAM:</strong> @jasperpetshop</li>
                        <li><strong>FACEBOOK:</strong> @jasperpetshop</li>
                        <li><strong>TIKTOK:</strong> @jasperpetshop</li>
                        <li><strong>WHATSAPP:</strong> 903-433-063</li>
                    </ul>
                </div>
            )
        },
        {
            question: "¿Tienen tienda física?",
            answer: (
                <p>Por el momento no, pero tenemos proyecciones de estar mas cerca de ustedes en todo el Perú y exterior.</p>
            )
        },
        {
            question: "¿Medios de pagos aceptados?",
            answer: (
                <div className="space-y-2">
                    <p>Contamos con los siguientes medios de pago:</p>
                    <ul className="list-disc pl-5">
                        <li>Yape</li>
                        <li>Plim</li>
                        <li>Transferencia directa</li>
                        <li>Efectivo</li>
                        <li>Solo pagos con Tarjeta Débito y Crédito tendrá un recargo de 5% al valor del producto.</li>
                    </ul>
                </div>
            )
        },
        {
            question: "¿Realizan Envíos a Provincias?",
            answer: (
                <div className="space-y-3">
                    <p>Sí, enviamos a provincias por agencias Shalom o Marvisur, hacia todas las provincias del Perú.</p>
                    <p>Si desea que se realice el envió por otra agencia, tendrá un recargo de 15 soles por el costo de traslado hacia dicha agencia. (Solo se cubre el costo del embalaje por temporada)</p>
                    <p>Se realiza el pago adelantado del 30% del valor y el resto cuando el encargado esta enviando el producto en la agencia.</p>
                </div>
            )
        },
        {
            question: "¿Cuáles son los costos de envío?",
            answer: (
                <p>Contamos con equipo de despacho, el cual está encargado de entregar tus productos de acuerdo a su cronograma de reparto en todo Lima y Callao (Revisando Cobertura). En caso de lugares que sobrepasen la cobertura se envia por agencias Shalom o Marvisur.</p>
            )
        },
        {
            question: "¿Cuáles son los Tiempos de entrega?",
            answer: (
                <p>Los envíos en Lima y Callao serán despachados dentro de un plazo de 2-5 hábiles (Dependiendo del tiempo de fabricación del pedido)  y los envíos a provincia serán enviados en un plazo de 3 a 5 días hábiles. De igual forma se considera que los despachos a provincias vía agencia pueden sufrir retrasos debido a la alta congestión de dichas empresa.</p>
            )
        },
        {
            question: "¿Mis Compras tienen garantía?",
            answer: (
                <p>En caso de presentar alguna falla de materiales comprobable, se puede solicitar el cambio del producto o reparación.</p>
            )
        },
        {
            question: "¿Hay devolución del dinero en caso de que no me guste el producto?",
            answer: (
                <p><strong>Rotundamente NO</strong>. Nuestros productos son fabricados a pedido, única y exclusivamente con las características solicitadas por el cliente.</p>
            )
        },
        {
            question: "Si al recibir mi producto, me doy cuenta que realice mal mi pedido ¿Qué solución me pueden dar?",
            answer: (
                <p>Dado que todos nuestros productos son fabricados única y exclusivamente a pedido, y al no existir motivos de devolución por terminaciones de producto o falla de material, se podrá realizar un descuento especial en el siguiente pedido. <strong>No se realizará devolución de dinero.</strong></p>
            )
        }
    ];

    return (
        <section id="faq" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <div className="mb-12 text-center" data-aos="fade-up">
                    <div className="flex justify-center mb-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <FontAwesomeIcon icon={faCircleQuestion} className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Preguntas Frecuentes
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Todo lo que necesitas saber sobre tus compras en Jasper Pet Shop
                    </p>
                </div>

                <div className="space-y-2" data-aos="fade-up" data-aos-delay="100">
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
