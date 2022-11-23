import { PropsWithChildren } from 'react';



export default function AppWrapper(props: PropsWithChildren<any>) {
    // const { member, setMember, setMessMonth } = useContext(StateContext);
    // const { loading, error, data } = useMyQuery<iResponse<MyMember | undefined>>(ApiUrl.MEMBER + '?last_login_update=1', {} as iResponse<undefined>)

    // useEffect(() => {
    //     //console.log("AppWrapper->", data.response)
    //     setMember(data.response)
    //     if (data.response?.mess_id != undefined && data.response?.mess_id > 0 && data.response?.active_month != undefined && data.response?.active_month > 0) {
    //         //console.log("load mess month info", data.response?.mess_id, data.response?.active_month);
    //         loadMessMonth(data.response?.mess_id, data.response?.active_month)
    //     }
    // }, [data])


    // const loadMessMonth = async (mess_id: number, month_id: number) => {
    //     const result = await axios.get<iResponse<MyMessMonth>>(`mess/summery/mess-month/${mess_id}/${month_id}`)
    //     //console.log("mess month--> ", result);
    //     if (result.data.error == false) {
    //         const mm = result.data.response!
    //         setMessMonth(mm)
    //     }
    // }

    // console.log("load=>", loading, "user->", user, "data?.me=>", data?.me, "error", error);

    // error
    // if (error) {
    //     return <>{
    //         props.children
    //     }</>
    // }
    // // loading
    // if (member === undefined || loading === true) {
    //     return (<MyLoadingSreen />);
    // }
    //done
    return <>{
        props.children
    }</>
}
