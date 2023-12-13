import axios from 'axios'

const client = axios.create()

export const getDogs = async (accessToken: string) => {
    const { data } = await client.get('/api/v1/dogs', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })

    return data
}
