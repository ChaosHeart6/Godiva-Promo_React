import { useForm } from "react-hook-form";
import { data } from "react-router-dom";
function MessageForm(){
    const{register,handleSubmit,reset}= useForm(); 
    const onSubmit = (data) =>{
        console.log(data);
        reset();
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 400, margin: 'auto' }}>
            <input placeholder="姓名" {...register("name",{required:true})}/><br/><br/>
            <input placeholder="email" {...register("email",{required:true})}/><br/><br/>
            <textarea placeholder="留言" {...register("message", {required:true})}></textarea><br/><br/>
            <button type="submit">送出留言</button>
        </form>
    );
}
export default MessageForm;