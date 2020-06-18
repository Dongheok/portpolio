// amplify
// import Amplify, { Auth, API, graphqlOperation, Storage } from "aws-amplify";

// axios
// import axios from "axios";

// rxjs
import { filter, mergeMap } from "rxjs/operators";

//공통 로직 헬퍼로 분리할 경우

export const pageMoveEpic = (action$) =>
  action$.pipe(
    filter((action) => action.type === "CURRENT_PAGE"),
    mergeMap(async (action) => {
      return {
        type: "CURRENT_PAGE_RESULT",
      };
    })
  );
