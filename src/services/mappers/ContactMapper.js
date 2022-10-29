class ContactMapper {
  toPersistence(domainContact) {
    return {
      id: domainContact.id,
      name: domainContact.name,
      email: domainContact.email,
      phone: domainContact.phone,
      category_id: domainContact.categoryId,
    };
  }

  toDomain(persistence) {
    return {
      id: persistence.id,
      name: persistence.name,
      email: persistence.email,
      phone: persistence.phone,
      category: {
        id: persistence.category_id,
        name: persistence.category_name,
      },
    };
  }
}

export default new ContactMapper();
