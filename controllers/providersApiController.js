// Controlador - Lógica de negocio de la app

const Provider = require("../models/providers");

const getProviders = async (req, res) => {
    if (req.params.company_name) {
        // con ID
        try {
            let provider = await Provider.find(
                { company_name: req.params.company_name },
                "-_id -__v"
            );
            if (provider.length > 0) {
                res.status(200).json(provider[0]); // Respuesta de la API para 1 producto
            } else {
                res.status(404).json({
                    msj: "proveedor no encontrado " + req.params.company_name,
                }); // Respuesta de la API para 1 producto
            }
        } catch (err) {
            res.status(400).json({ msj: err.message });
        }
    } else {
        // sin ID --> TODOS los providers
        try {
            let providers = await Provider.find({}, "-_id -__v");
            res.status(200).json(providers); // Respuesta de la API para muchos productos
        } catch (err) {
            res.status(400).json({ msj: err.message });
        }
    }
};

const getProvider = async (req, res) => {
    const { id } = req.params;

    try {
        let provider = await Provider.findById(id);
        res.status(200).json(provider);
    } catch (e) {
        res.status(400).json({ msj: e.message });
    }
};

const createProvider = async (req, res) => {
    const newProvider = req.body;

    try {
        let response = await new Provider(newProvider);
        let answer = await response.save();
        res.status(201).json({
            msj: `Proveedor ${answer.company_name} guardado en el sistema.`,
            provider: answer,
        });
    } catch (err) {
        console.log("Este es el error que devuelve la api", err.message);
        res.status(400).json({
            msj: err.message,
        });
    }
};

const deleteProvider = async (req, res) => {
    try {
        let { company_name } = req.body;
        let answer = await Provider.findOneAndDelete({ company_name });
        const msj = `Has eliminado al proveedor ${answer.company_name} de la base de datos`;
        res.status(200).json({ message: msj });
    } catch (error) {
        res.status(400).json({ msj: error.message });
    }
};

const updateProvider = async (req, res) => {
    try {
        let { company_name, CIF, address, url_web } = req.body;
        let answer = await Provider.findOneAndUpdate(
            { company_name },
            { CIF, address, url_web }
        );
        const msj = `Has actualizado el proveedor ${answer.company_name}  en la base de datos`;
        res.status(200).json({ message: msj });
    } catch (error) {
        res.status(400).json({ msj: error.message });
    }
};

module.exports = {
    getProviders,
    getProvider,
    createProvider,
    deleteProvider,
    updateProvider,
};
