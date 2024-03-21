import React, { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";

const Stepper = () => {
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const handlePrevClick = () => {
    setCurrentStep(prev => Math.max(1, prev - 1)); 
    if (complete) setComplete(false);
  };

  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      <div className="flex ">
      {currentStep > 1 && (
        <button
          className="btn bg-blue-600 text-white px-4 py-1 rounded-lg mx-4"
          onClick={handlePrevClick}
        >
          Back
        </button>
      )}
      {!complete && (
        <button
          className="btn bg-blue-600 text-white px-4 py-1 rounded-lg"
          onClick={() => {
            setCurrentStep(prev => prev === steps.length ? prev : prev + 1);
            if (currentStep === steps.length) setComplete(true);
          }}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )}
      </div>
    </>
  );
};

export default Stepper;
