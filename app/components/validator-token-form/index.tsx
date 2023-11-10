"use client";
import { useRef, useState } from "react";
import Spinner from "../spinner";
import s from "./token-form.module.scss";

interface ValidatorContainerProps {
  onTokenConfirm: (token: string) => void;
}
export default function ValidatorDialog({
  onTokenConfirm,
}: ValidatorContainerProps) {
  const [tokenValue, setToken] = useState<string>("");
  const [isInputValid, setInputVaid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleCloseModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const handleConfirm = () => {
    setIsLoading(true);
    onTokenConfirm(tokenValue);
  };

  const handleTokenChange = (v: string) => {
    if (v.length == 9) {
      setToken(v);
      setInputVaid(true);
    } else {
      setInputVaid(false);
      setToken("");
    }
  };

  return (
    <dialog id="token-dialog" className={s.dialog} open ref={dialogRef}>
      <div className={s.inner_wrapper}>
        <section>
          <h4>Ingresar Token</h4>
          <input
            type="text"
            maxLength={9}
            name="token"
            onChange={(e) => handleTokenChange(e.target.value)}
            disabled={isLoading}
            placeholder="Token"
          />
        </section>

        <button
          type="submit"
          onClick={handleConfirm}
          disabled={!isInputValid || isLoading}
        >
          {isLoading ? <Spinner /> : "Confirmar"}
        </button>
      </div>
    </dialog>
  );
}
