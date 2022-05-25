import request from 'umi-request';

/**
 *
 * @param {Object} params 获得用户详情
 * @returns 创建用户服务返回对象
 */
export async function GetUserDetailService(params: { id: string }) {
  const { id } = params;
  try {
    const res = await request(`/api/users/${id}`, {
      method: 'GET',
    });
    return res;
  } catch (error) {
    throw new Error("Can't get user");
  }
}


