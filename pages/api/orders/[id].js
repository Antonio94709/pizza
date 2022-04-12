import dbConnect from "../../../utils/mongo";
import Order from "../../../models/Order"

const handler = async (req, res) => {
    const { method } = req;

    await dbConnect()

    if (method === "GET") {

    }
    if (method === "POST") {
        try {

        } catch (err) {
            res.status(500)
        }
    }
}

export default handler