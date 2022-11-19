import { Dialog, Transition } from "@headlessui/react";
import { useSpring, animated, config } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useRouter } from "next/router";
import { Fragment, useEffect, useRef, useState } from "react";

import useWindowDimensions from "../hooks/useWindowDimensions";

const SlidingModal = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const ref = useRef(null);
  const [cartScroll, setCartScroll] = useState(0);
  const { layoutHeight, height } = useWindowDimensions();

  const [{ y }, api] = useSpring(() => ({
    y: isOpen ? "0%" : "100%",
  }));

  const bindScrollable = useDrag(
    ({
      movement: [mx, my],
      velocity: [vx, vy],
      direction: [xDir, yDir],
      distance: [dx, dy],
      down,
      cancel,
    }) => {
      if (cartScroll > 0) {
        return cancel();
      }
      let y = down ? my : 0;

      if (my > height / 2 && !down) {
        setIsOpen(false);
      }

      if (!down && vy > 0.2 && my > 50) {
        setIsOpen(false);
      }
      if (my < 0) {
        return;
      }

      api.start(() => {
        return {
          y: `${(y * 100) / height}%`,
        };
      });
    }
  );

  const bind = useDrag(
    ({
      movement: [mx, my],
      velocity: [vx, vy],
      direction: [xDir, yDir],
      distance: [dx, dy],
      down,
      cancel,
    }) => {
      let y = down ? my : 0;

      if (my > height / 2 && !down) {
        setIsOpen(false);
      }

      if (!down && vy > 0.2 && my > 50) {
        setIsOpen(false);
      }
      if (my < 0) {
        return;
      }

      api.start(() => {
        return {
          y: `${(y * 100) / height}%`,
        };
      });
    }
  );

  useEffect(() => {
    let y = height;
    if (isOpen) {
      y = "0%";
    }
    if (!isOpen) {
      y = "100%";
    }
    api.start(() => {
      return {
        y: y,
        config: {
          tension: 400,
          friction: 30,
        },
      };
    });
  }, [isOpen]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[100]"
        onClose={() => {
          return;
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
          />
        </Transition.Child>

        <div
          style={{ height: height }}
          className="fixed  w-full -bottom-[50px] "
        >
          <Dialog.Panel className="h-full w-full absolute">
            <animated.div
              className="h-full w-full rounded-t-xl bg-gray-50 text-left shadow-xl  flex flex-col relative pb-[50px] touch-none"
              style={{ y }}
            >
              <div {...bind()} className="flex flex-col shadow-lg mt-2">
                <div className="w-[150px] h-[4px] bg-gray-200 rounded-full mx-auto" />
                <p className="text-lg font-medium mt-2 mx-auto">Shopping bag</p>
                <p className="text-xs font-medium mb-2 mx-auto text-gray-500">
                  subtitle
                </p>
              </div>
            </animated.div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SlidingModal;
