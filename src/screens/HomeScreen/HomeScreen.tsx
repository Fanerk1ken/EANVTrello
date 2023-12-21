// тут все компоненты
import {increment} from "../../store/slices/counterSlice.ts";
import {decrement} from "../../store/slices/counterSlice.ts";
import {useAppSelector} from "../../store/store.ts";
import {useAppDispatch} from "../../store/store.ts";
import {getValueSelector} from "../../store/slices/counterSlice.ts";

const HomeScreen = () => {
    const count = useAppSelector(getValueSelector)
    const dispatch = useAppDispatch()
    const onClickIncrement = () => {
        dispatch(increment())
    }
    const onClickDecrement = () => {
        dispatch(decrement())
    }
    return (
        <div>
            <h1> { count }</h1>
            <button onClick={onClickIncrement}> + 1</button>
            <button onClick={onClickDecrement}> - 1</button>
        </div>
    );
};

export default HomeScreen;