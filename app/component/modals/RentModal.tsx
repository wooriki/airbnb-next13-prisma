"use client";

import useRentModal from "@/app/hook/useRentModal";
import Modal from "./Modal";

const RentModal = () => {
  const rentModal = useRentModal();

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel="Submit"
      title="Airbnb 나의 홈"
    />
  );
};

export default RentModal;
