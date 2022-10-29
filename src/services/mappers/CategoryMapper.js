class CategoryMapper {
  toPersistence(domainCategory) {
    return { domainCategory };
  }

  toDomain(persistenceCategory) {
    return {
      id: persistenceCategory.id,
      name: persistenceCategory.name,
    };
  }
}

export default new CategoryMapper();
