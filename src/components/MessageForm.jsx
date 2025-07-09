import { useForm } from "react-hook-form";
import { data } from "react-router-dom";
function MessageForm(){
    const{register,handleSubmit,reset}= useForm(); //拿到函數工具
    const onSubmit = (data) =>{
        console.log(data);
        reset();
    }
    return(
        //第一個onSubmit為系統命名,通過handle驗證register後再執行自己寫的onSubmit
        <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 400, margin: 'auto' }}>
            {/*提示文字,註冊欄位name(表單key),必填*/ }
            <input placeholder="姓名" {...register("name",{required:true})}/><br/><br/>
            <input placeholder="email" {...register("email",{required:true})}/><br/><br/>
            <textarea placeholder="留言" {...register("message", {required:true})}></textarea><br/><br/>
            {/*submit觸發form onSubmit */}
            <button type="submit">送出留言</button>
        </form>
    );
}
export default MessageForm;