"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hook/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";
import useLoginModal from "@/app/hook/useLoginModal";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error("문제가 발생했습니다");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="AirBnb에 오신걸 환영합니다."
        subtitle="계정을 생성해 주세요."
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="성함"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="비밀번호"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outlined
        label="구글 계정으로 계속"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outlined
        label="Github 계정으로 계속"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      <div className=" text-neutral-500 text-center  mt-4 font-light">
        <div className="flex flex-row items-center justify-center  gap-2">
          <p className="">이미 계정이 있으신가요?</p>
          <div
            onClick={toggle}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            로그인
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disable={isLoading}
      isOpen={registerModal.isOpen}
      title="등록하기"
      actionLabel="다음으로"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
