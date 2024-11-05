import './App.css';
import supabase from "./SupabaseConfig";
import {useState} from "react";

function App() {
    const [user, setUser] = useState();

    // 회원가입 함수
    const signUp = async () => {
        console.log("signUp 호출");

        const { data, error } = await supabase.auth.signUp({
            email: "testuser11@example.com",
            password: "password123",
        });

        if (error) {
            console.error(error);
            return;
        }

        console.log("signUp data : ", data);
    };

    //로그인
    const login = async () => {
        console.log("login 호출됨");

        const { data, error } = await supabase.auth.signInWithPassword({
            email: "testuser11@example.com",
            password: "password1234",
        });

        if (error) {
            console.error(error);
            return;
        }

        console.log("login data : ", data);
        setUser(data);
    };

    //회원 정보 조회
    const getUserInfo = async () => {
        console.log("getUserInfo 호출됨");

        const { data } = await supabase.auth.getUser();

        console.log("getUserInfo data : ", data);
        setUser(data);
    };

    //회원 수정하기
    const updateUserInfo = async () => {
        console.log("updateUserInfo 호출");

        const { data, error } = await supabase.auth.updateUser({
            email: "testuser11@example.com",
            password: "password1234",
        });

        if (error) {
            console.error(error);
            return;
        }

        console.log("updateUserInfo data : ", data);
    };

    //로그아웃
    const logout = async () => {
        console.log("logout 호출");

        let { error } = await supabase.auth.signOut();

        if (error) {
            console.error(error);
            return;
        }
    };


    return (
            <div>
                <div>
                    <button onClick={() => signUp()}>회원등록</button>
                </div>
                <div>
                    <button onClick={() => login()}>로그인 하기</button>
                </div>
                <div>
                    <button onClick={() => getUserInfo()}>등록한 회원정보 조회</button>
                </div>
                <div>
                    <button onClick={() => updateUserInfo()}>회원정보 수정</button>
                </div>
                <div>
                    <button onClick={() => logout()}>로그아웃 하기</button>
                </div>
            </div>
    );
}

export default App;
