export const call = (phone) => {
    window.location.href = `tel:${fixIsraelPhoneNumber(phone)}`;
}

export const sendWhatsAppMessage = (phone) => {
    window.location.href = `https://api.whatsapp.com/send?phone=${fixIsraelPhoneNumber(phone)}&text=Hello!%20I%20just%20saw%20your%20card%20and...`;
}

export const fixIsraelPhoneNumber = (phone) => {
    if (phone.startsWith("0")) {
        return "+972" + phone.slice(1).replace(/\D/g, "");
    }
    return phone;
};