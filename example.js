// Load file wabutton.js
// ID : Tempatkan/copy script ini di footer script
// EN : Place/copy this script in the footer of the script

var wa_btnSetting = {
        "btnColor": "#16BE45",
        "ctaText": "Butuh bantuan?",
        "cornerRadius": 40,
        "marginBottom": 55,
        "marginLeft": 20,
        "marginRight": 20,
        "btnPosition": "right",
        "whatsAppNumber": "6281212341234",
        "welcomeMessage": "Hai, admin\nSaya tertarik dengan layanan di website anda\nNama saya :\nPertanyan saya :",
        "zIndex": 999999,
        "btnColorScheme": "white"
    };
    window.onload = () => {
        _waEmbed(wa_btnSetting);
    };
