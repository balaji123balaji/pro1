export interface data{
    V_USR_NM:string;
    V_PSWRD:string;
    V_ACTN_NM:string; //"LOGIN";
    RESULT:string; //"@RESULT";
    V_LOGIN_VALIDITY:string;
    V_SRC_CD:string;

    resultUsrOnly:string;
    resultLoginValidity:string;
    resultUsrPaymentValid:string;
    resultUsrPwd:string;
}