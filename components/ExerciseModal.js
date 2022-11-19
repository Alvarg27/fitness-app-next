import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { FaClock, FaDumbbell, FaStopwatch, FaSync } from "react-icons/fa";
import ExerciseModalInput from "./ExerciseModalInput";

export default function ExerciseModal({
  isOpen,
  setIsOpen,
  exerciseId,
  handleAddExerciseOptions,
  index,
}) {
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [time, setTime] = useState("");
  const [rest, setRest] = useState("");
  const [notes, setNotes] = useState("");
  function closeModal() {
    setIsOpen(false);
  }

  const handleSave = () => {
    handleAddExerciseOptions(index, {
      reps,
      sets,
      time,
      rest,
      notes,
    });
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Fine tune the exercise
                </Dialog.Title>
                <div className="mt-2"></div>

                <ExerciseModalInput
                  label="Reps"
                  icon="FaDumbbell"
                  color="emerald"
                  value={reps}
                  setValue={setReps}
                  placeholder="8-10"
                />

                <ExerciseModalInput
                  label="Sets"
                  icon="FaSync"
                  color="blue"
                  value={sets}
                  setValue={setSets}
                  placeholder="5"
                />

                <ExerciseModalInput
                  label="Time (min)"
                  icon="FaStopwatch"
                  color="indigo"
                  value={time}
                  setValue={setTime}
                  placeholder="30"
                />

                <ExerciseModalInput
                  label="Rest (min)"
                  icon="FaStopwatch"
                  color="amber"
                  value={rest}
                  setValue={setRest}
                  placeholder="30"
                />

                <div>
                  <label className="text-sm font-medium my-auto">
                    Extra notes
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="border-[1px] w-full rounded-xl p-2 text-sm"
                    placeholder="At a tough weight"
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white mr-2 "
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
