import { isAfter, isEqual, parseISO, format } from 'date-fns'

const Utils = {
    isValidEmail: (email: string) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        return (false)
    },
    isValidText: (text: string) => {
        if (/^[A-Za-z][a-zA-Z0-9_ ]{3,15}$/.test(text)) {
            return (true)
        }
        return (false)
    },
    // working with string array
    convertStrtoArray: (str: string): string[] => {
        if (str)
            return str.replace("[", "").replace("]", "").replaceAll("\"", "").split(",")
        else {
            return []
        }
    },
    convertArraytoStr: (str_array: string[]): string => {
        return "[" + str_array.toString() + "]"
    },
    // date 
    getDateTimeFromDate: (onlyDate: string): string => {
        /**
         * const p = new Date().toLocaleString("en-us", { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: "2-digit",hour12:false });
    
           console.log(p.replaceAll("/","-"));
         */
        const date = new Date()
        const _date = onlyDate + " " + date.toLocaleString("en-us", { hour: '2-digit', minute: '2-digit', second: "2-digit", hour12: false });
        return _date;
    },
    isTodayOrFuture: (dateMySqlStr: string) => {//2020-09-07 06:21:47
        const date = parseISO(dateMySqlStr.replace(" ", "T"))
        const res = isAfter(date, new Date()) || isEqual(new Date(), date)
        return res;
    },
    getCurrentDateSqlFormat: () => {//2020-09-07 06:21:47
        return format(new Date(), 'yyyy-MM-dd HH:mm:ss')
    }
}
export default Utils