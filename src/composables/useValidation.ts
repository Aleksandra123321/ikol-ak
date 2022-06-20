import { ParamNameType } from "@/types/types";
import { reactive, ref } from "vue";

export default function useValidation() {
  const errorInput = reactive({
    lat1: "",
    long1: "",
    lat2: "",
    long2: "",
  });
  const isError = ref(false);
  
  const checkForm = (params: Record<ParamNameType, string>) => {
    isError.value = false;

    let param: ParamNameType;
    for (param in params) {
      checkValidation(params[param], param);
    }
    let err: ParamNameType
    for (err in errorInput) {
      if (errorInput[err]) {
        isError.value = true;
      }
    }
  };

  const checkValidation = (value: number | string, name: ParamNameType) => {
    const range = name === 'lat1' || name === 'lat2' ? 90 : 180
    const pattern = /^[0-9]*(?:\.[0-9]{0,4})?$/;
    if (!value) {
      errorInput[name] = "Pole jest wymagane";
      return;
    } else if (!pattern.test(value.toString())) {
      errorInput[name] = "Wprowadzona wartość powinna być liczbą. Maksymalnie 4 zera po przecinku.";
      return;
    } else if (value > range || value < 0) {
      errorInput[name] =
        "Wprowadzona wartość, powinna być w zakresie od 0 do " + range + '.';
      return;
    } else {
      errorInput[name] = "";
    }
  };

  return { checkForm, checkValidation, errorInput, isError };
}
