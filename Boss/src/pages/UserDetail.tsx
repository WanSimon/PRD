import React from 'react';
import { useRequest } from 'ahooks';
import { GetUserDetailService } from 'request';

export default function UserDetailPage() {
  const {} = useRequest(GetUserDetailService, {
    manual: true,
    onSuccess(res) {
      if (res.success) {
        console.log(res.data);
      }
    },
  });

  return <div>UserDetail</div>;
}
