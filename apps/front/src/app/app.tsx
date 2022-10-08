import { contract } from '@nx-test-rest/contracts';
import { useQuery } from '@tanstack/react-query';
import { initClient } from '@ts-rest/core';
// 🕵️ tried to import from @ts-rest/react-query, but it didn't work
import { initQueryClient } from '@nx-test-rest/client';

const rqApi = initQueryClient(contract, {
  baseUrl: 'http://localhost:3333',
  baseHeaders: {},
});
const coreApi = initClient(contract, {
  baseUrl: 'http://localhost:3333',
  baseHeaders: {},
});

export const App = () => {
  // 🕵️  ️
  const { data, isLoading, error } = rqApi.testRoute.useQuery(['rq-query'], {});
  // const { data, isLoading, error } = useQuery(['rest-query'], async () => {
  //   const res = await fetch('http://localhost:3333/test/');
  //   return res.json();
  // });
  // const { data, isLoading, error } = useQuery(['core-query'], async () => {
  //   return coreApi.testRoute({ id: '' });
  // });
  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : error ? (
        'Error!'
      ) : data ? (
        <div>{JSON.stringify(data)}</div>
      ) : null}
    </div>
  );
};
