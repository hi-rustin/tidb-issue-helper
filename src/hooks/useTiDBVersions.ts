import * as api from "../api";
import { state } from "reactive.macro";

export default function useTiDBVersions() {
  let repoVersions: { [repo: string]: string[] } = state({});

  const fetchTiDBVersions = (repo: string) => {
    api.fetchTiDBVersions(repo).then(
      (versions: string[]) =>
        (repoVersions = {
          ...repoVersions,
          [repo]: versions
        })
    );
  };

  return { repoVersions, fetchTiDBVersions };
}
