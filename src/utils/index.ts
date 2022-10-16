export const validateNumberInput: React.ChangeEventHandler<HTMLInputElement> = async (evt) => {

    let key = evt.target.value;
    key = key.replaceAll(",", "")
    const regex = /\d+/

    if (key.length > 0) {
        if (key.length === 1 && key === "0")
            evt.target.value = "";

        let keyLastValue = key.charAt(key.length - 1);

        if (!regex.test(keyLastValue)) {
            if (key.length === 1) {
                evt.target.value = "";
                return;
            }
            let subStr = key.substring(0, key.length - 1);

            let convertedString = Number.parseInt(subStr)
            if (typeof convertedString === "number") {
                evt.target.value = Number(convertedString.toFixed(1)).toLocaleString()

            }

        } else {
            evt.target.value = Number(Number.parseInt(key).toFixed(1)).toLocaleString()
        }

    }
}