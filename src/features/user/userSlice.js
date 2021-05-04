import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
export default userSlice.reducer;

/*
  
{
    "movies": {
        
        
        
        
        
        
        
        "9" :{
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2A509165105A09F9F533E2008B143BCF38D6A5859D0EBB40CCA388772005CD94/scale?width=1440&aspectRatio=1.78&format=jpeg",
            "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A13BEC78ACF76FC91A94A1595A62A42CC26DFC6259332C74E061ADA379024E5C/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",
            "description": "A young rabbit embarks on a journey to dig the burrow of her dreams, despite not having a clue what she’s doing. Rather than reveal to her neighbors her imperfections, she digs herself deeper and deeper into trouble. After hitting (bed)rock bottom, she learns there is no shame in asking for help.",
            "subTitle": "2020 • 6m • Family, Animation",
            "title": "Burrow",
            "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DD8BBA864E290FBC03A244A488FFC8DC8365FBF2F95A122B1D57BF3772D717FD/scale?width=1440&aspectRatio=1.78",
            "type": "original"
        },
        "10" :{
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/223DAE104BE1175F374C4AACAC0EB5B8B0DB9C49839AA2E10085533DDFE07A8E/scale?width=1440&aspectRatio=1.78&format=jpeg",
            "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg",
            "description": "This animated comedy focuses on the eponymous family in the town of Springfield. The head of the Simpson family, Homer, is not a typical family man. A nuclear-plant employee, he does his best to lead his family but often finds that they are leading him. The family includes loving, blue-haired matriarch Marge, troublemaking son Bart, overachieving daughter Lisa and baby Maggie.",
            "subTitle": "1989 - 2019 • 31 Seasons • Comedy, Animation",
            "title": "The Simpsons",
            "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/47A6FB38D95B3A5EF5583C9EED0B698ED2992CBA4AC7222DD3269DC92DFA03A6/scale?width=1440&aspectRatio=1.78",
            "type": "trending"
        },
        "11" :{
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F6CDB6C0EB2D77EB19BCADA31F85066E001A1F61FA68F4AC3356A73FE076477F/scale?width=1440&aspectRatio=1.78&format=jpeg",
            "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F8D1A6FD00ED479CC5E2E5C3E85F10EB05550748BD3C0FE76756614071968541/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",
            "description": "Marvel Studios LEGENDS traces Wanda Maximoff’s evolution from an adversary of The Avengers to a powerful ally, and highlights one special relationship destined to shape her future in unexpected ways…",
            "subTitle": "2021 • 1 Season • Science Fiction, Fantasy, Action-Adventure",
            "title": "Legends",
            "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DDFF0FDF457E092EE53149CE7DB5BD14CB97E27B92D2D087E7C687B4E3073DE2/scale?width=1440&aspectRatio=1.78",
            "type": "original"
        },
        "12" :{
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/09A0617D43282F1A4FA1A97DF6159B4263A8DEB9679A007B61D5E5D6E5D0A2DD/scale?width=1440&aspectRatio=1.78&format=jpeg",
            "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1E0501AFBAFCA1ABB5D31DBA7D1A913B2A35D70FD3DFD804939B71901577161D/scale?width=400&aspectRatio=1.78&format=jpeg",
            "description": "Watch with Premier Access at the same time it's in open theaters and before it's available to all Disney+ subscribers on June 4, 2021.",
            "subTitle": "2021 • 1h 52m • Family, Fantasy, Animation, Action-Adventure",
            "title": "Raya",
            "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E7D8EFFDD30B2A0E205DDD9929207439B21E7595709769F2A23C50457664FFB2/scale?width=1440&aspectRatio=1.78",
            "type": "new"
        },
        "13" :{
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/09DAD6A5DAECB6BA9E329FFA896B18978FE4AD5540C070D7973EE53357DD4D24/scale?width=1440&aspectRatio=1.78&format=jpeg",
            "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/01666FAA085FF29B709DB13975E563E5E047DAAFF7D8F331201CB73F3C30027E/scale?width=400&aspectRatio=1.78&format=jpeg",
            "description": "When Bob Parr visits designer Edna Mode for help with his high-energy toddler, she pulls an all-nighter designing a supersuit to harness Jack-Jack’s seemingly limitless powers.",
            "subTitle": "2018 • 7m • Family, Comedy, Animation",
            "title": "Auntie EDNA",
            "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A31BE6502DC7A3A01DAF58DF7E91AB6FF598A078C8FA88A1DB2D7B7E25439464/scale?width=1440&aspectRatio=1.78",
            "type": "recommend"
        },
        "14" :{
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6FF2B403436E6558C08FB44B40AE334A9172FA293A8325940E8E7FF7F696E4D3/scale?width=1440&aspectRatio=1.78&format=jpeg",
            "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/509E4D9F0BF98A9DC4CDD38954380782F6AB2664E503CC7652A37D18D06666BF/scale?width=400&aspectRatio=1.78&format=jpeg",
            "description": "Mickey entertains preschoolers by inviting them to join him and his friends for a date at the Clubhouse. Using early math learning and problem solving skills, he leads kids on an interactive adventure of learning and fun.",
            "subTitle": "2006 - 2013 • 5 Seasons • Kids, Animation",
            "title": "Mickey mouse",
            "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4FF3FCD567F0263430DFC33B9489CE2799AE33B50AD553DE65F03B3EA2E19828/scale?width=1440&aspectRatio=1.78",
            "type": "trending"
        },
        "15" :{
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/456A711C19899C881600F6247705E5253EB18C2471D75E5281E1FF6ACB6D2FBA/scale?width=1440&aspectRatio=1.78&format=jpeg",
            "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/341AE85B6C1423B9042B5F2E786645EE551B9D546C3D263B220A4727617FD2B8/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",
            "description": "Marvel Studios’ “The Falcon and The Winter Soldier” stars Anthony Mackie as Sam Wilson aka The Falcon, and Sebastian Stan as Bucky Barnes aka The Winter Soldier. The pair, who came together in the final moments of “Avengers: Endgame,” team up on a global adventure that tests their abilities—and their patience.",
            "subTitle": "2021 • 1 Season • Science Fiction, Action-Adventure, Buddy",
            "title": "The falcon and the winter soldier",
            "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4A67A42FB16607DAE7E22266D3F00181965178ED1884047C2D982EE7D89D3554/scale?width=1440&aspectRatio=1.78",
            "type": "new"
        },
        "16" :{
            "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/28F85D4A1F7CA135B7B20B3EDB42EDA73196C2A71C52C5400A6C2285F8E071BE/scale?width=1440&aspectRatio=1.78&format=jpeg",
            "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4B32D8CB7C0C358E9FF348FB0338AD13F9A5836808E9EF5FADD9DBDE52FC3CAD/scale?width=400&aspectRatio=1.78&format=jpeg",
            "description": "J-Pop band Perfume is featured in this original music and documentary series 'Disney’s My Music Story.' The show features Perfume's life stories, passion for music, Disney memories, and more.",
            "subTitle": "2019 • 53m • Documentary, Biographical, Music",
            "title": "My music story",
            "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/97BB36F8B9FC053F561894DD7B1C42C4FD20E63560F481CBCB3B9D3600CFCA3B/scale?width=1440&aspectRatio=1.78",
            "type": "new"
        }
    }
}

*/
