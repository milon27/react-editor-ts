import MyMember from "../../../server/models/MyMember"

const ViewUtils = {
    reduceCoin: (setMember: (value: React.SetStateAction<MyMember | null | undefined>) => void, coinCost: number) => {
        setMember(old => {
            return { ...old, mem_total_coins: old?.mem_total_coins! - coinCost! } as MyMember
        })
    }
}
export default ViewUtils