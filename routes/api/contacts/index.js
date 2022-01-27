import { Router } from "express";
import {
  controllerGetContacts,
  getContactById,
  newContact,
  removeContact,
  updateContact,
} from "../../../controllers/contacts/index";

import {
  validateCreate,
  validateId,
  validateUpdate,
  validateUpdateFavorite,
} from "./validation";

const router = new Router();

router.get("/", controllerGetContacts);

router.get("/:id", getContactById);

router.post("/", validateCreate, newContact);

router.delete("/:id", validateId, removeContact);

router.put("/:id", validateId, validateUpdate, updateContact);

router.patch(
  "/:id/favorite",
  validateId,
  validateUpdateFavorite,
  updateContact
);

export default router;
