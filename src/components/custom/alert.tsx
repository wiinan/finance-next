import { MESSAGE_OPTIONS_BY_TYPE } from "@/constants/alert";
import { toast } from "sonner";

export function showAlertMessage(
  message: string,
  type: "success" | "error" | "warning"
): void {
  const options = MESSAGE_OPTIONS_BY_TYPE[type];

  toast(message, options);
}
