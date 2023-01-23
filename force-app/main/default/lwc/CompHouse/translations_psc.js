//Source: https://github.com/companieshouse/api-enumerations/blob/master/psc_descriptions.yml

const pscTranslationTable = {
  //created this manually
  pscKind: {
    "individual-person-with-significant-control": "Individual PSC",
    "corporate-entity-person-with-significant-control": "Corporate Entity PSC",
    "legal-person-with-significant-control": "Legal PSC",
    "super-secure-person-with-significant-control": "Super Secure PSC",
    "individual-beneficial-owner": "Individual Beneficial Owner",
    "corporate-entity-beneficial-owner": "Corporate Entity Beneficial Owner",
    "legal-person-beneficial-owner": "Legal Person Beneficial Owner",
    "super-secure-beneficial-owner": "Super Secure Beneficial Owner"
  },

  //PSC Descriptions
  psc_long_description: {
    "ownership-of-shares-25-to-50-percent":
      "The person holds, directly or indirectly, more than 25% but not more than 50% of the shares in the company.",
    "ownership-of-shares-50-to-75-percent":
      "The person holds, directly or indirectly, more than 50% but not more than 75% of the shares in the company.",
    "ownership-of-shares-75-to-100-percent":
      "The person holds, directly or indirectly, more than 75% of the shares in the company.",
    "ownership-of-shares-25-to-50-percent-as-trust":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust, and the trustees of that trust (in their capacity as such) hold, directly or indirectly, more than 25% but not more than 50% of the shares in the company.",
    "ownership-of-shares-50-to-75-percent-as-trust":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust, and the trustees of that trust (in their capacity as such) hold, directly or indirectly, more than 50% but not more than 75% of the shares in the company.",
    "ownership-of-shares-75-to-100-percent-as-trust":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust, and the trustees of that trust (in their capacity as such) hold, directly or indirectly, more than 75% of the shares in the company.",
    "ownership-of-shares-25-to-50-percent-as-firm":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed is not a legal person; and the members of that firm (in their capacity as such) hold, directly or indirectly, more than 25% but not more than 50% of the shares in the company.",
    "ownership-of-shares-50-to-75-percent-as-firm":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed is not a legal person; and the members of that firm (in their capacity as such) hold, directly or indirectly, more than 50% but not more than 75% of the shares in the company.",
    "ownership-of-shares-75-to-100-percent-as-firm":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed is not a legal person; and the members of that firm (in their capacity as such) hold, directly or indirectly, more than 75% of the shares in the company.",
    "ownership-of-shares-more-than-25-percent-registered-overseas-entity":
      "The beneficial owner holds, directly or indirectly, more than 25% of the shares in the entity.",
    "ownership-of-shares-more-than-25-percent-as-trust-registered-overseas-entity":
      "Beneficial owner is a trustee of a trust and: the trustees of that trust (in their capacity as such) hold, directly or indirectly, more than 25% of the shares in the entity.",
    "ownership-of-shares-more-than-25-percent-as-firm-registered-overseas-entity":
      "The beneficial owner is a member of a firm that is not a legal person under its governing law, and: the members of that firm (in their capacity as such) hold, directly or indirectly, more than 25% of the shares in the entity.",
    "voting-rights-25-to-50-percent":
      "The person holds, directly or indirectly, more than 25% but not more than 50% of the voting rights in the company.",
    "voting-rights-50-to-75-percent":
      "The person holds, directly or indirectly, more than 50% but not more than 75% of the voting rights in the company.",
    "voting-rights-75-to-100-percent":
      "The person holds, directly or indirectly, more than 75% of the voting rights in the company.",
    "voting-rights-25-to-50-percent-as-trust":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust, and the trustees of that trust (in their capacity as such) hold, directly or indirectly, more than 25% but not more than 50% of the voting rights in the company.",
    "voting-rights-50-to-75-percent-as-trust":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust, and the trustees of that trust (in their capacity as such) hold, directly or indirectly, more than 50% but not more than 75% of the voting rights in the company.",
    "voting-rights-75-to-100-percent-as-trust":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust, and the trustees of that trust (in their capacity as such) hold, directly or indirectly, more than 75% of the voting rights in the company.",
    "voting-rights-25-to-50-percent-as-firm":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed is not a legal person; and the members of that firm (in their capacity as such) hold, directly or indirectly, more than 25% but not more than 50% of the voting rights in the company.",
    "voting-rights-50-to-75-percent-as-firm":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed is not a legal person; and the members of that firm (in their capacity as such) hold, directly or indirectly, more than 50% but not more than 75% of the voting rights in the company.",
    "voting-rights-75-to-100-percent-as-firm":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed is not a legal person; and the members of that firm (in their capacity as such) hold, directly or indirectly, more than 75% of the voting rights in the company.",
    "voting-rights-more-than-25-percent-registered-overseas-entity":
      "The beneficial owner holds, directly or indirectly, more than 25% of the voting rights in the entity.",
    "voting-rights-more-than-25-percent-as-trust-registered-overseas-entity":
      "Beneficial owner is a trustee of a trust and: the trustees of that trust (in their capacity as such) hold, directly or indirectly, more than 25% of the voting rights in the entity.",
    "voting-rights-more-than-25-percent-as-firm-registered-overseas-entity":
      "The beneficial owner is a member of a firm that is not a legal person under its governing law, and: the members of that firm (in their capacity as such) hold, directly or indirectly, more than 25% of the voting rights in the entity.",
    "right-to-appoint-and-remove-directors":
      "The person holds the right, directly or indirectly, to appoint or remove a majority of the board of directors of the company.",
    "right-to-appoint-and-remove-directors-as-trust":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust, and the trustees of that trust (in their capacity as such) hold the right, directly or indirectly, to appoint or remove a majority of the board of directors of the company.",
    "right-to-appoint-and-remove-directors-as-firm":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed is not a legal person; and the members of that firm (in their capacity as such) hold the right, directly or indirectly, to appoint or remove a majority of the board of directors of the company.",
    "significant-influence-or-control":
      "The person has the right to exercise, or actually exercises, significant influence or control over the company.",
    "significant-influence-or-control-as-trust":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust, and the trustees of that trust (in their capacity as such)  have the right to exercise, or actually exercise, significant influence or control over the company.",
    "significant-influence-or-control-as-firm":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed is not a legal person; and the members of that firm (in their capacity as such) have the right to exercise, or actually exercise, significant influence or control over the company.",
    "right-to-share-surplus-assets-25-to-50-percent-limited-liability-partnership":
      "The person holds or is treated as holding, directly or indirectly, the right to share in more than 25% but not more than 50% of any surplus assets of the LLP on a winding up.",
    "right-to-share-surplus-assets-50-to-75-percent-limited-liability-partnership":
      "The person holds or is treated as holding, directly or indirectly, the right to share in more than 50% but not more than 75% of any surplus assets of the LLP on a winding up.",
    "right-to-share-surplus-assets-75-to-100-percent-limited-liability-partnership":
      "The person holds or is treated as holding, directly or indirectly, the right to share in more than 75% of any surplus assets of the LLP on a winding up.",
    "right-to-share-surplus-assets-25-to-50-percent-as-trust-limited-liability-partnership":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust; and the trustee of that trust (in their capacity as such) hold or are treated as holding, directly or indirectly, the right to share in more than 25% but not more than 50% of any surplus assets on a winding up of the LLP.",
    "right-to-share-surplus-assets-50-to-75-percent-as-trust-limited-liability-partnership":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust; and the trustee of that trust (in their capacity as such) hold or are treated as holding, directly or indirectly, the right to share in more than 50% but not more than 75% of any surplus assets on a winding up of the LLP.",
    "right-to-share-surplus-assets-75-to-100-percent-as-trust-limited-liability-partnership":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust; and the trustee of that trust (in their capacity as such) hold or are treated as holding, directly or indirectly, the right to share in more than 75% of any surplus assets on a winding up of the LLP.",
    "right-to-share-surplus-assets-25-to-50-percent-as-firm-limited-liability-partnership":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed, is not a legal person; and the members of that firm (in their capacity as such) hold or as treated as holding, directly or indirectly, the right to share in more than 25% but not more than 50% of any surplus assets of the LLP on a winding up.",
    "right-to-share-surplus-assets-50-to-75-percent-as-firm-limited-liability-partnership":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed, is not a legal person; and the members of that firm (in their capacity as such) hold or as treated as holding, directly or indirectly, the right to share in more than 50% but not more than 75% of any surplus assets of the LLP on a winding up.",
    "right-to-share-surplus-assets-75-to-100-percent-as-firm-limited-liability-partnership":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed, is not a legal person; and the members of that firm (in their capacity as such) hold or as treated as holding, directly or indirectly, the right to share 75% or more of any surplus assets of the LLP on a winding up.",
    "voting-rights-25-to-50-percent-limited-liability-partnership":
      "The person holds, directly or indirectly, more than 25% but not more than 50% of the voting rights in the LLP.",
    "voting-rights-50-to-75-percent-limited-liability-partnership":
      "The person holds, directly or indirectly, more than 50% but not more than 75% of the voting rights in the LLP.",
    "voting-rights-75-to-100-percent-limited-liability-partnership":
      "The person holds, directly or indirectly, more than 75% of the voting rights in the LLP.",
    "voting-rights-25-to-50-percent-as-trust-limited-liability-partnership":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust, and the trustees of that trust (in their capacity as such) hold, directly or indirectly, more than 25% but not more than 50% of the voting rights in the LLP.",
    "voting-rights-50-to-75-percent-as-trust-limited-liability-partnership":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust, and the trustees of that trust (in their capacity as such) hold, directly or indirectly, more than 50% but not more than 75% of the voting rights in the LLP.",
    "voting-rights-75-to-100-percent-as-trust-limited-liability-partnership":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust, and the trustees of that trust (in their capacity as such) hold, directly or indirectly, more than 75% of the voting rights in the LLP.",
    "voting-rights-25-to-50-percent-as-firm-limited-liability-partnership":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed is not a legal person; and the members of that firm (in their capacity as such) hold, directly or indirectly, more than 25% but not more than 50% of the voting rights in the LLP.",
    "voting-rights-50-to-75-percent-as-firm-limited-liability-partnership":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed is not a legal person; and the members of that firm (in their capacity as such) hold, directly or indirectly, more than 50% but not more than 75% of the voting rights in the LLP.",
    "voting-rights-75-to-100-percent-as-firm-limited-liability-partnership":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed is not a legal person; and the members of that firm (in their capacity as such) hold, directly or indirectly, more than 75% of the voting rights in the LLP.",
    "right-to-appoint-and-remove-members-limited-liability-partnership":
      "The person holds the right, directly or indirectly, to appoint or remove a majority of the members who are entitled to take part in the management of an LLP.",
    "right-to-appoint-and-remove-members-as-trust-limited-liability-partnership":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust, and the trustees of that trust (in their capacity as such) hold the right, directly or indirectly, to appoint or remove a majority of the members who are entitled to take part in the management of the LLP.",
    "right-to-appoint-and-remove-members-as-firm-limited-liability-partnership":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed, is not a legal person; and the members of that firm (in their capacity as such) hold the right, directly or indirectly, to appoint or remove a majority of the members who are entitled to take part in the management of the LLP.",
    "significant-influence-or-control-limited-liability-partnership":
      "The person has the right to exercise, or actually exercises, significant influence or control over the LLP.",
    "significant-influence-or-control-as-trust-limited-liability-partnership":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust, and the trustees of that trust (in their capacity as such)  have the right to exercise, or actually exercise, significant influence or control over the LLP.",
    "significant-influence-or-control-as-firm-limited-liability-partnership":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed is not a legal person; and the members of that firm (in their capacity as such) have the right to exercise, or actually exercise, significant influence or control over the LLP.",
    "significant-influence-or-control-registered-overseas-entity":
      "The beneficial owner has the right to exercise, or actually exercises, significant influence or control over the entity.",
    "significant-influence-or-control-as-trust-registered-overseas-entity":
      "Beneficial owner is a trustee of a trust and: the trustees of that trust (in their capacity as such) have the right to exercise, or actually exercise, significant influence or control over the company.",
    "significant-influence-or-control-as-firm-registered-overseas-entity":
      "The beneficial owner is a member of a firm that is not a legal person under its governing law, and: the members of that firm (in their capacity as such) have the right to exercise, or actually exercise, significant influence or control over the company.",
    "part-right-to-share-surplus-assets-25-to-50-percent":
      "The person holds or is treated as holding, directly or indirectly, the right to share in more than 25% but not more than 50% of any surplus assets of the partnership on a winding up.",
    "part-right-to-share-surplus-assets-50-to-75-percent":
      "The person holds or is treated as holding, directly or indirectly, the right to share in more than 50% but not more than 75% of any surplus assets of the partnership on a winding up.",
    "part-right-to-share-surplus-assets-75-to-100-percent":
      "The person holds or is treated as holding, directly or indirectly, the right to share in more than 75% of any surplus assets of the partnership on a winding up.",
    "part-right-to-share-surplus-assets-25-to-50-percent-as-trust":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust; and the trustee of that trust (in their capacity as such) hold or are treated as holding, directly or indirectly, the right to share in more than 25% but not more than 50% of any surplus assets on a winding up of the partnership.",
    "part-right-to-share-surplus-assets-50-to-75-percent-as-trust":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust; and the trustee of that trust (in their capacity as such) hold or are treated as holding, directly or indirectly, the right to share in more than 50% but not more than 75% of any surplus assets on a winding up of the partnership.",
    "part-right-to-share-surplus-assets-75-to-100-percent-as-trust":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust; and the trustee of that trust (in their capacity as such) hold or are treated as holding, directly or indirectly, the right to share in more than 75% of any surplus assets on a winding up of the partnership.",
    "part-right-to-share-surplus-assets-25-to-50-percent-as-firm":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed, is not a legal person; and the members of that firm (in their capacity as such) hold or as treated as holding, directly or indirectly, the right to share in more than 25% but not more than 50% of any surplus assets of the partnership on a winding up.",
    "part-right-to-share-surplus-assets-50-to-75-percent-as-firm":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed, is not a legal person; and the members of that firm (in their capacity as such) hold or as treated as holding, directly or indirectly, the right to share in more than 50% but not more than 75% of any surplus assets of the partnership on a winding up.",
    "part-right-to-share-surplus-assets-75-to-100-percent-as-firm":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed, is not a legal person; and the members of that firm (in their capacity as such) hold or as treated as holding, directly or indirectly, the right to share 75% or more of any surplus assets of the partnership on a winding up.",
    "right-to-appoint-and-remove-person":
      "The person holds the right, directly or indirectly, to appoint or remove a majority of the persons who are entitled to take part in the management of the partnership.",
    "right-to-appoint-and-remove-person-as-firm":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a firm that, under the law by which it is governed, is not a legal person; and the members of that firm (in their capacity as such) hold the right, directly or indirectly, to appoint or remove a majority of the persons who are entitled to take part in the management of the partnership.",
    "right-to-appoint-and-remove-person-as-trust":
      "The person has the right to exercise, or actually exercises, significant influence or control over the activities of a trust, and the trustees of that trust (in their capacity as such) hold the right, directly or indirectly, to appoint or remove a majority of the persons who are entitled to take part in the management of the partnership.",
    "right-to-appoint-and-remove-directors-registered-overseas-entity":
      "The beneficial owner holds the right, directly or indirectly, to appoint or remove a majority of the board of directors of the entity.",
    "right-to-appoint-and-remove-directors-as-trust-registered-overseas-entity":
      "Beneficial owner is a trustee of a trust and: the trustees of that trust (in their capacity as such) hold the right, directly or indirectly, to appoint or remove a majority of the board of directors of the company.",
    "right-to-appoint-and-remove-directors-as-firm-registered-overseas-entity":
      "The beneficial owner is a member of a firm that is not a legal person under its governing law, and: the members of that firm (in their capacity as such) hold the right, directly or indirectly, to appoint or remove a majority of the board of directors of the company."
  },

  psc_short_description: {
    "ownership-of-shares-25-to-50-percent":
      "Ownership of shares – More than 25% but not more than 50%",
    "ownership-of-shares-50-to-75-percent":
      "Ownership of shares – More than 50% but less than 75%",
    "ownership-of-shares-75-to-100-percent":
      "Ownership of shares – 75% or more",
    "ownership-of-shares-25-to-50-percent-as-trust":
      "Ownership of shares – More than 25% but not more than 50% with control over the trustees of a trust",
    "ownership-of-shares-50-to-75-percent-as-trust":
      "Ownership of shares – More than 50% but less than 75% with control over the trustees of a trust",
    "ownership-of-shares-75-to-100-percent-as-trust":
      "Ownership of shares – 75% or more with control over the trustees of a trust",
    "ownership-of-shares-25-to-50-percent-as-firm":
      "Ownership of shares – More than 25% but not more than 50% as a member of a firm",
    "ownership-of-shares-50-to-75-percent-as-firm":
      "Ownership of shares – More than 50% but less than 75% as a member of a firm",
    "ownership-of-shares-75-to-100-percent-as-firm":
      "Ownership of shares – 75% or more as a member of a firm",
    "ownership-of-shares-more-than-25-percent-registered-overseas-entity":
      "Ownership of shares - More than 25%",
    "ownership-of-shares-more-than-25-percent-as-trust-registered-overseas-entity":
      "Ownership of shares - More than 25% with control over the trustees of a trust",
    "ownership-of-shares-more-than-25-percent-as-firm-registered-overseas-entity":
      "Ownership of shares - More than 25% as a member of a firm",
    "voting-rights-25-to-50-percent":
      "Ownership of voting rights - More than 25% but not more than 50%",
    "voting-rights-50-to-75-percent":
      "Ownership of voting rights - More than 50% but less than 75%",
    "voting-rights-75-to-100-percent":
      "Ownership of voting rights - 75% or more",
    "voting-rights-25-to-50-percent-as-trust":
      "Ownership of voting rights - More than 25% but not more than 50% with control over the trustees of a trust",
    "voting-rights-50-to-75-percent-as-trust":
      "Ownership of voting rights - More than 50% but less than 75% with control over the trustees of a trust",
    "voting-rights-75-to-100-percent-as-trust":
      "Ownership of voting rights - 75% or more with control over the trustees of a trust",
    "voting-rights-25-to-50-percent-as-firm":
      "Ownership of voting rights - More than 25% but not more than 50% as a member of a firm",
    "voting-rights-50-to-75-percent-as-firm":
      "Ownership of voting rights - More than 50% but less than 75% as a member of a firm",
    "voting-rights-75-to-100-percent-as-firm":
      "Ownership of voting rights - 75% or more as a member of a firm",
    "voting-rights-more-than-25-percent-registered-overseas-entity":
      "Ownership of voting rights - More than 25%",
    "voting-rights-more-than-25-percent-as-trust-registered-overseas-entity":
      "Ownership of voting rights - More than 25% with control over the trustees of a trust",
    "voting-rights-more-than-25-percent-as-firm-registered-overseas-entity":
      "Ownership of voting rights - More than 25% as a member of a firm",
    "right-to-appoint-and-remove-directors":
      "Right to appoint and remove directors",
    "right-to-appoint-and-remove-directors-as-trust":
      "Right to appoint and remove directors with control over the trustees of a trust",
    "right-to-appoint-and-remove-directors-as-firm":
      "Right to appoint and remove directors as a member of a firm",
    "significant-influence-or-control": "Has significant influence or control",
    "significant-influence-or-control-as-trust":
      "Has significant influence or control over the trustees of a trust",
    "significant-influence-or-control-as-firm":
      "Has significant influence or control as a member of a firm",
    "right-to-share-surplus-assets-25-to-50-percent-limited-liability-partnership":
      "Right to surplus assets - More than 25% but not more than 50%",
    "right-to-share-surplus-assets-50-to-75-percent-limited-liability-partnership":
      "Right to surplus assets - More than 50% but less than 75%",
    "right-to-share-surplus-assets-75-to-100-percent-limited-liability-partnership":
      "Right to surplus assets - 75% or more",
    "right-to-share-surplus-assets-25-to-50-percent-as-trust-limited-liability-partnership":
      "Right to surplus assets - More than 25% but not more than 50% with control over the trustees of a trust",
    "right-to-share-surplus-assets-50-to-75-percent-as-trust-limited-liability-partnership":
      "Right to surplus assets - More than 50% but less than 75% with control over the trustees of a trust",
    "right-to-share-surplus-assets-75-to-100-percent-as-trust-limited-liability-partnership":
      "Right to surplus assets - 75% or more with control over the trustees of a trust",
    "right-to-share-surplus-assets-25-to-50-percent-as-firm-limited-liability-partnership":
      "Right to surplus assets - More than 25% but not more than 50% as a member of a firm",
    "right-to-share-surplus-assets-50-to-75-percent-as-firm-limited-liability-partnership":
      "Right to surplus assets - More than 50% but less than 75% as a member of a firm",
    "right-to-share-surplus-assets-75-to-100-percent-as-firm-limited-liability-partnership":
      "Right to surplus assets - 75% or more as a member of a firm",
    "voting-rights-25-to-50-percent-limited-liability-partnership":
      "Ownership of voting rights - More than 25% but not more than 50%",
    "voting-rights-50-to-75-percent-limited-liability-partnership":
      "Ownership of voting rights - More than 50% but less than 75%",
    "voting-rights-75-to-100-percent-limited-liability-partnership":
      "Ownership of voting rights - 75% or more",
    "voting-rights-25-to-50-percent-as-trust-limited-liability-partnership":
      "Ownership of voting rights - More than 25% but not more than 50% with control over the trustees of a trust",
    "voting-rights-50-to-75-percent-as-trust-limited-liability-partnership":
      "Ownership of voting rights - More than 50% but less than 75% with control over the trustees of a trust",
    "voting-rights-75-to-100-percent-as-trust-limited-liability-partnership":
      "Ownership of voting rights - 75% or more with control over the trustees of a trust",
    "voting-rights-25-to-50-percent-as-firm-limited-liability-partnership":
      "Ownership of voting rights - More than 25% but not more than 50% as a member of a firm",
    "voting-rights-50-to-75-percent-as-firm-limited-liability-partnership":
      "Ownership of voting rights - More than 50% but less than 75% as a member of a firm",
    "voting-rights-75-to-100-percent-as-firm-limited-liability-partnership":
      "Ownership of voting rights - 75% or more as a member of a firm",
    "right-to-appoint-and-remove-members-limited-liability-partnership":
      "Right to appoint and remove members",
    "right-to-appoint-and-remove-members-as-trust-limited-liability-partnership":
      "Right to appoint and remove members with control over the trustees of a trust",
    "right-to-appoint-and-remove-members-as-firm-limited-liability-partnership":
      "Right to appoint and remove members as a member of a firm",
    "significant-influence-or-control-limited-liability-partnership":
      "Has significant influence or control",
    "significant-influence-or-control-as-trust-limited-liability-partnership":
      "Has significant influence or control over the trustees of a trust",
    "significant-influence-or-control-as-firm-limited-liability-partnership":
      "Has significant influence or control as a member of a firm",
    "significant-influence-or-control-registered-overseas-entity":
      "Has significant influence or control",
    "significant-influence-or-control-as-trust-registered-overseas-entity":
      "Has significant influence or control over the trustees of a trust",
    "significant-influence-or-control-as-firm-registered-overseas-entity":
      "Has significant influence or control as a member of a firm",
    "part-right-to-share-surplus-assets-25-to-50-percent":
      "Right to surplus assets - More than 25% but not more than 50%",
    "part-right-to-share-surplus-assets-50-to-75-percent":
      "Right to surplus assets - More than 50% but less than 75%",
    "part-right-to-share-surplus-assets-75-to-100-percent":
      "Right to surplus assets - 75% or more",
    "part-right-to-share-surplus-assets-25-to-50-percent-as-trust":
      "Right to surplus assets - More than 25% but not more than 50% with control over the trustees of a trust",
    "part-right-to-share-surplus-assets-50-to-75-percent-as-trust":
      "Right to surplus assets - More than 50% but less than 75% with control over the trustees of a trust",
    "part-right-to-share-surplus-assets-75-to-100-percent-as-trust":
      "Right to surplus assets - 75% or more with control over the trustees of a trust",
    "part-right-to-share-surplus-assets-25-to-50-percent-as-firm":
      "Right to surplus assets - More than 25% but not more than 50% as a member of a firm",
    "part-right-to-share-surplus-assets-50-to-75-percent-as-firm":
      "Right to surplus assets - More than 50% but less than 75% as a member of a firm",
    "part-right-to-share-surplus-assets-75-to-100-percent-as-firm":
      "Right to surplus assets - 75% or more as a member of a firm",
    "right-to-appoint-and-remove-person": "Right to appoint and remove persons",
    "right-to-appoint-and-remove-person-as-firm":
      "Right to appoint and remove persons as a member of a firm",
    "right-to-appoint-and-remove-person-as-trust":
      "Right to appoint and remove persons with control over the trustees of a trust",
    "right-to-appoint-and-remove-directors-registered-overseas-entity":
      "Right to appoint and remove directors",
    "right-to-appoint-and-remove-directors-as-trust-registered-overseas-entity":
      "Right to appoint and remove directors with control over the trustees of a trust",
    "right-to-appoint-and-remove-directors-as-firm-registered-overseas-entity":
      "Right to appoint and remove members as a member of a firm"
  },
  statement_description: {
    "no-individual-or-entity-with-signficant-control":
      "The company knows or has reasonable cause to believe that there is no registrable person or registrable relevant legal entity in relation to the company",
    "psc-exists-but-not-identified":
      "The company knows or has reasonable cause to believe that there is a registrable person in relation to the company but it has not identified the registrable person",
    "psc-details-not-confirmed":
      "The company has identified a registrable person in relation to the company but all the required particulars of that person have not been confirmed",
    "steps-to-find-psc-not-yet-completed":
      "The company has not yet completed taking reasonable steps to find out if there is anyone who is a registrable person or a registrable relevant legal entity in relation to the company",
    "psc-contacted-but-no-response":
      "The company has given a notice under section 790D of the Act which has not been complied with",
    "psc-has-failed-to-confirm-changed-details":
      "{linked_psc_name} has failed to comply with a notice given by the company under section 790E of the Act",
    "restrictions-notice-issued-to-psc":
      "The company has issued a restrictions notice under paragraph 1 of Schedule 1B to the Act",
    "no-individual-or-entity-with-signficant-control-partnership":
      "The partnership knows or has reasonable cause to believe that there is no registrable person or registrable relevant legal entity in relation to the partnership",
    "psc-exists-but-not-identified-partnership":
      "The partnership knows or has reasonable cause to believe that there is a registrable person in relation to the partnership but it has not identified the registrable person",
    "psc-details-not-confirmed-partnership":
      "The partnership has identified a registrable person in relation to the partnership but all the required particulars of that person have not been confirmed",
    "steps-to-find-psc-not-yet-completed-partnership":
      "The partnership has not yet completed taking reasonable steps to find out if there is anyone who is a registrable person or a registrable relevant legal entity in relation to the partnership",
    "psc-contacted-but-no-response-partnership":
      "The partnership has given a notice under Regulation 10 of The Scottish Partnerships (Register of People with Significant Control) Regulations 2017 which has not been complied with",
    "psc-has-failed-to-confirm-changed-details-partnership":
      "The partnership has given a notice under Regulation 11 of The Scottish Partnerships (Register of People with Significant Control) Regulations 2017 which has not been complied with",
    "restrictions-notice-issued-to-psc-partnership":
      "The partnership has issued a restrictions notice under paragraph 1 of Schedule 2 to The Scottish Partnerships (Register of People with Significant Control) Regulations 2017",
    "all-beneficial-owners-identified":
      "All beneficial owners have been identified and all required information can be provided",
    "no-beneficial-owner-identified":
      "No beneficial owners have been identified",
    "at-least-one-beneficial-owner-unidentified":
      "Some beneficial owners have been identified and all required information can be provided",
    "information-not-provided-for-at-least-one-beneficial-owner":
      "All beneficial owners have been identified but only some required information can be provided",
    "at-least-one-beneficial-owner-unidentified-and-information-not-provided-for-at-least-one-beneficial-owner":
      "Some beneficial owners have been identified and only some required information can be provided"
  },
  super_secure_description: {
    "super-secure-persons-with-significant-control":
      "The person with significant control's details are not shown because restrictions on using or disclosing any of the individual’s particulars are in force under regulations under section 790ZG in relation to this company",
    "super-secure-beneficial-owner":
      "The beneficial owners details are not shown because restrictions on using or disclosing any of the individual’s particulars are in force"
  }
};

export default function translatePSC(field, value) {
  return pscTranslationTable[field][value];
}
