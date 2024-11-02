// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    pokedex: "Pokédex",
                    main: "Main",
                    myPokemon: "My Pokémon",
                    loading: "Pokemon Loading...",
                }
            },
            ko: {
                translation: {
                    pokedex: "포켓몬 도감",
                    main: "메인",
                    myPokemon: "내 포켓몬",
                    loading: "포켓몬 불러오는 중...",
                }
            },
            jp: {
                translation: {
                    pokedex: "ポケモン図鑑",
                    main: "メイン",
                    myPokemon: "私のポケモン",
                    loading: "ポケモン読み込み中...",
                }
            },
            zh: {
                translation: {
                    pokedex: "宝可梦图鉴",
                    main: "主页面",
                    myPokemon: "我的宝可梦",
                    loading: "正在加载宝可梦...",
                }
            },
        },
        lng: "ko", // 초기 설정 언어
        fallbackLng: "en", // 설정된 언어가 없을 때 기본으로 사용할 언어
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
