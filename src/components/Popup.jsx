"use client";

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem('popupShown');
    
    if (!popupShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('popupShown', 'true');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const forceShowPopup = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="p-0 overflow-hidden border-0 bg-transparent max-w-2xl">
          <div className="relative bg-white rounded-xl shadow-2xl">
            {/* Header with Title */}
            <DialogHeader className="p-2 pb-1 border-b">
              <DialogTitle className="text-xl font-bold text-center text-gray-800">
                Join Academy of Internal Audit
              </DialogTitle>
              <p className="text-sm text-gray-600 text-center mt-1">
                Online Training and Certification Course
              </p>
            </DialogHeader>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-3 top-3 z-10 h-7 w-7 rounded-full bg-white/80 hover:bg-white shadow-md"
              onClick={handleClose}
            >
              <X className="h-3 w-3" />
            </Button>
            
            <div className="p-2">
             
                <img 
                src="https://aia.in.net/assets/images/Other-Pages-Pop-Up.jpg" 
                alt="Internal Audit Training Course"
                className={`w-full h-auto rounded-lg transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Internal+Audit+Course';
                  setImageLoaded(true);
                }}
              />

              
          
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Get Certified Button */}
      <Button 
        onClick={forceShowPopup}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg text-base"
      >
        Get Certified
      </Button>
    </>
  );
};

export default Popup;