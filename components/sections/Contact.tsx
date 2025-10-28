import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { FaCopy, FaCheck, FaEnvelope } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

export const Contact: React.FC = () => {
    const email = "srisathriyan@gmail.com";
    const [isCopied, setIsCopied] = useState(false);
    const [isEmailVisible, setIsEmailVisible] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2500); // Reset after 2.5 seconds
        }).catch(err => {
            console.error('Failed to copy email: ', err);
        });
    };

    const handleRevealEmail = () => {
        setIsEmailVisible(true);
    };

    return (
        <section id="contact" className="py-20 bg-dark/95">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Fade direction="up" triggerOnce>
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">Get In <span className="text-primary-dark">Touch</span></h2>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        Have a question, an opportunity, or just want to say hi? My inbox is always open. Click the button below to get in touch.
                    </p>
                </Fade>

                <div className="max-w-xl mx-auto flex flex-col items-center justify-center min-h-[96px]">
                    {isEmailVisible ? (
                        <Fade direction="up" triggerOnce className="w-full">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                                <span className="text-lg text-gray-300 font-mono break-all">{email}</span>
                                <Button 
                                    onClick={handleCopyEmail} 
                                    size="md" 
                                    variant="primary" 
                                    className="w-full sm:w-auto shrink-0 transition-all duration-300"
                                    disabled={isCopied}
                                >
                                    {isCopied ? (
                                        <>
                                            Copied! <FaCheck className="ml-2" />
                                        </>
                                    ) : (
                                        <>
                                            Copy Email <FaCopy className="ml-2" />
                                        </>
                                    )}
                                </Button>
                            </div>
                        </Fade>
                    ) : (
                        <Fade direction="up" delay={200} triggerOnce>
                            <Button onClick={handleRevealEmail} size="lg" variant="primary">
                                Say Hello <FaEnvelope className="ml-2" />
                            </Button>
                        </Fade>
                    )}
                </div>
            </div>
        </section>
    );
};