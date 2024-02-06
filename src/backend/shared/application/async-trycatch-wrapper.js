export async function asyncTryCatchWrapper(callback) {
    return async function (req, res, next) {
        try {
            await callback(req, res, next)
        } catch (e) {
            next(e)
        }

    }
}
