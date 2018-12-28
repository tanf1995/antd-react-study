export default {
    'GET /api/news': (req, res) => {
        let res_data = {
            data: [
                {
                    content: "message 1",
                    time: "1 hours ago"
                },
                {
                    content: "message 2",
                    time: "2 hours ago"
                },
                {
                    content: "message 3",
                    time: "1 hours ago"
                }
            ],
            errcode: 0
        }
        setTimeout(() => {
            res.end(JSON.stringify(res_data));
        }, 1500)
    },
    'DELETE /api/news': (req, res) => {
        let res_data = {
            errcode: 0
        }
        setTimeout(() => {
            res.end(JSON.stringify(res_data));
        }, 1500)
    }
}