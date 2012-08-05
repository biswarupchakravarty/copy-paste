{
  "Accounts": {
    "+MmuqVgHVYH7Q+5imsGc4497fiuBAbBeCGYRkiQSCfY=": {
      "Blueprints": {
        "RestaurantSearch": {
          "Attributes": [],
          "CreatedBy": "Test User",
          "Description": "This is Test for Blueprint",
          "Id": 166,
          "LastUpdatedBy": "Test User",
          "Name": "RestaurantSearch",
          "Tags": [
            "Blueprint,Testtag"
          ],
          "UtcDateCreated": "/Date(1338805348000+0000)/",
          "UtcLastUpdatedDate": "/Date(1338805348000+0000)/",
          "Lists": {
            "Category": {
              "Attributes": [],
              "CountURL": "NULL",
              "CreatedBy": "Test User",
              "Description": "List of category for events.",
              "Id": 1224,
              "IsListDynamic": false,
              "ItemCount": 6,
              "Items": [
                {
                  "Description": "\r",
                  "Name": "Food",
                  "Position": 1,
                  "Value": "food"
                },
                {
                  "Description": "\r",
                  "Name": "Coffee",
                  "Position": 2,
                  "Value": "coffee"
                },
                {
                  "Description": "\r",
                  "Name": "Outdoors",
                  "Position": 3,
                  "Value": "outdoors"
                },
                {
                  "Description": "\r",
                  "Name": "Drinks",
                  "Position": 4,
                  "Value": "drinks"
                },
                {
                  "Description": "\r",
                  "Name": "Shops",
                  "Position": 5,
                  "Value": "shops"
                },
                {
                  "Description": "\r",
                  "Name": "Arts",
                  "Position": 6,
                  "Value": "arts"
                }
              ],
              "LastUpdatedBy": "Test User",
              "ListingURL": "NULL",
              "Name": "Category",
              "PageNumber": 0,
              "PageSize": 0,
              "SearchURL": "NULL",
              "Tags": [],
              "UtcDateCreated": "/Date(1334239794000+0000)/",
              "UtcLastUpdatedDate": "/Date(1334239794000+0000)/"
            },
            "locationtype": {
              "Attributes": [
                {
                  "Key": "display.name",
                  "Value": "LocationType\r"
                },
                {
                  "Key": "list.type",
                  "Value": "Basic\r"
                }
              ],
              "CountURL": "NULL",
              "CreatedBy": "Test User",
              "Description": "Category",
              "Id": 1225,
              "IsListDynamic": false,
              "ItemCount": 6,
              "Items": [
                {
                  "Description": "\r",
                  "Name": "Food",
                  "Position": 1,
                  "Value": "food"
                },
                {
                  "Description": "\r",
                  "Name": "Coffee",
                  "Position": 2,
                  "Value": "coffee"
                },
                {
                  "Description": "\r",
                  "Name": "Outdoors",
                  "Position": 3,
                  "Value": "outdoors"
                },
                {
                  "Description": "\r",
                  "Name": "Drinks",
                  "Position": 4,
                  "Value": "drinks"
                },
                {
                  "Description": "\r",
                  "Name": "Shops",
                  "Position": 5,
                  "Value": "shops"
                },
                {
                  "Description": "\r",
                  "Name": "Arts",
                  "Position": 6,
                  "Value": "arts"
                }
              ],
              "LastUpdatedBy": "Test User",
              "ListingURL": "NULL",
              "Name": "locationtype",
              "PageNumber": 0,
              "PageSize": 0,
              "SearchURL": "NULL",
              "Tags": [
                "NULL"
              ],
              "UtcDateCreated": "/Date(1334819112000+0000)/",
              "UtcLastUpdatedDate": "/Date(1334819868000+0000)/"
            },
            "starrating": {
              "Attributes": [
                {
                  "Key": "display.name",
                  "Value": "Star Rating\r"
                },
                {
                  "Key": "list.type",
                  "Value": "Basic\r"
                }
              ],
              "CountURL": "NULL",
              "CreatedBy": "Tushar Maini",
              "Description": "Options for number of stars.",
              "Id": 1232,
              "IsListDynamic": false,
              "ItemCount": 6,
              "Items": [
                {
                  "Description": "\r",
                  "Name": "0 Stars",
                  "Position": 1,
                  "Value": "0"
                },
                {
                  "Description": "\r",
                  "Name": "1 Star",
                  "Position": 2,
                  "Value": "1"
                },
                {
                  "Description": "\r",
                  "Name": "2 Star",
                  "Position": 3,
                  "Value": "2"
                },
                {
                  "Description": "\r",
                  "Name": "3 Star",
                  "Position": 4,
                  "Value": "3"
                },
                {
                  "Description": "\r",
                  "Name": "4 Star",
                  "Position": 5,
                  "Value": "4"
                },
                {
                  "Description": "\r",
                  "Name": "5 Star",
                  "Position": 6,
                  "Value": "5"
                }
              ],
              "LastUpdatedBy": "Test User",
              "ListingURL": "NULL",
              "Name": "starrating",
              "PageNumber": 0,
              "PageSize": 0,
              "SearchURL": "NULL",
              "Tags": [
                "NULL"
              ],
              "UtcDateCreated": "/Date(1336114495000+0000)/",
              "UtcLastUpdatedDate": "/Date(1336114586000+0000)/"
            }
          },
          "Relations": {
            "Friend": {
              "Attributes": [],
              "ConnectionCount": 0,
              "CreatedBy": "Test User",
              "Description": "friend connection",
              "EndPointA": {
                "Label": "friend",
                "Multiplicity": -1,
                "SchemaId": 2188
              },
              "EndPointB": {
                "Label": "friend",
                "Multiplicity": -1,
                "SchemaId": 2188
              },
              "Id": 1431,
              "LastUpdatedBy": "Test User",
              "Name": "Friend",
              "Properties": [],
              "PropertiesCount": 0,
              "Tags": null,
              "UtcDateCreated": "/Date(1334239796000+0000)/",
              "UtcLastUpdatedDate": "/Date(1334239796000+0000)/"
            },
            "LocationComment": {
              "Attributes": [],
              "ConnectionCount": 663125,
              "CreatedBy": "Test User",
              "Description": "User comment on location",
              "EndPointA": {
                "Label": "Comment",
                "Multiplicity": -1,
                "SchemaId": 2190
              },
              "EndPointB": {
                "Label": "Location",
                "Multiplicity": 1,
                "SchemaId": 2189
              },
              "Id": 1432,
              "LastUpdatedBy": "Test User",
              "Name": "LocationComment",
              "Properties": [],
              "PropertiesCount": 0,
              "Tags": null,
              "UtcDateCreated": "/Date(1334239796000+0000)/",
              "UtcLastUpdatedDate": "/Date(1334239796000+0000)/"
            },
            "LocationAlbum": {
              "Attributes": [],
              "ConnectionCount": 255109,
              "CreatedBy": "Test User",
              "Description": "Location Album",
              "EndPointA": {
                "Label": "Location",
                "Multiplicity": 1,
                "SchemaId": 2189
              },
              "EndPointB": {
                "Label": "Album",
                "Multiplicity": -1,
                "SchemaId": 2191
              },
              "Id": 1433,
              "LastUpdatedBy": "Test User",
              "Name": "LocationAlbum",
              "Properties": [],
              "PropertiesCount": 0,
              "Tags": null,
              "UtcDateCreated": "/Date(1334239797000+0000)/",
              "UtcLastUpdatedDate": "/Date(1334239797000+0000)/"
            },
            "uservote": {
              "Attributes": [
                {
                  "Key": "display.name",
                  "Value": "User Vote\r"
                }
              ],
              "ConnectionCount": 0,
              "CreatedBy": "Tushar Maini",
              "Description": "Represents a user voting on a comment.",
              "EndPointA": {
                "Label": "Comment",
                "Multiplicity": -1,
                "SchemaId": 2190
              },
              "EndPointB": {
                "Label": "User",
                "Multiplicity": -1,
                "SchemaId": 2235
              },
              "Id": 1444,
              "LastUpdatedBy": "Tushar Maini",
              "Name": "uservote",
              "Properties": [],
              "PropertiesCount": 0,
              "Tags": null,
              "UtcDateCreated": "/Date(1336107781000+0000)/",
              "UtcLastUpdatedDate": "/Date(1336107781000+0000)/"
            }
          },
          "Schemas": {
            "File": {
              "ArticleCount": 0,
              "Attributes": [],
              "CreatedBy": "System",
              "Description": "This schema is a system generated schema and used for file/media storage. It can't be deleted/edited because doing so will break the functinality of file/media upload/download.",
              "Id": 2187,
              "LastUpdatedBy": "System",
              "Name": "File",
              "Properties": [
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "File name of the uploaded file",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6915,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 0,
                  "MinLength": 0,
                  "Name": "FileName",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "blob",
                  "DefaultValue": null,
                  "Description": "Download url of the uploaded file",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6916,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 0,
                  "MinLength": 0,
                  "Name": "Url",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "Content type of the uploaded file",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6917,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 0,
                  "MinLength": 0,
                  "Name": "ContentType",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "long",
                  "DefaultValue": null,
                  "Description": "Size of the uploaded file in bits",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6918,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 0,
                  "MinLength": 0,
                  "Name": "Size",
                  "Range": null,
                  "RegexValidator": null
                }
              ],
              "PropertiesCount": 4,
              "Tags": [
                "FileUpload",
                "System"
              ],
              "UtcDateCreated": "/Date(1334239794000+0000)/",
              "UtcLastUpdatedDate": "/Date(1334239794000+0000)/",
              "Version": null
            },
            "Account": {
              "ArticleCount": 0,
              "Attributes": [],
              "CreatedBy": "Test User",
              "Description": "User account",
              "Id": 2188,
              "LastUpdatedBy": "Test User",
              "Name": "Account",
              "Properties": [
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "Account username",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6919,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 400,
                  "MinLength": 0,
                  "Name": "Username",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "Account password",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6920,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 400,
                  "MinLength": 0,
                  "Name": "Password",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "Account email address",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6921,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 400,
                  "MinLength": 0,
                  "Name": "Email",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "Account phone number",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6922,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 400,
                  "MinLength": 0,
                  "Name": "Phone",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "Account First name",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6923,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 400,
                  "MinLength": 0,
                  "Name": "FirstName",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "Account Lastname",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6924,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 400,
                  "MinLength": 0,
                  "Name": "LastName",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "Account interests",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6925,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 400,
                  "MinLength": 0,
                  "Name": "Interests",
                  "Range": null,
                  "RegexValidator": null
                }
              ],
              "PropertiesCount": 7,
              "Tags": null,
              "UtcDateCreated": "/Date(1334239795000+0000)/",
              "UtcLastUpdatedDate": "/Date(1334239795000+0000)/",
              "Version": null
            },
            "Location": {
              "ArticleCount": 255118,
              "Attributes": [
                {
                  "Key": "displayName",
                  "Value": "Location\r"
                },
                {
                  "Key": "property.groups",
                  "Value": "\r"
                },
                {
                  "Key": "property.positions",
                  "Value": "6928,0"
                },
                {
                  "Key": "identifier.name",
                  "Value": "\r"
                },
                {
                  "Key": "identifier.value",
                  "Value": "Location\r"
                }
              ],
              "CreatedBy": "Test User",
              "Description": "Venue description",
              "Id": 2189,
              "LastUpdatedBy": "Test User",
              "Name": "Location",
              "Properties": [
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "Location Name",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6926,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 400,
                  "MinLength": 0,
                  "Name": "Name",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "text",
                  "DefaultValue": null,
                  "Description": "Location description",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6927,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 9223372036854776000,
                  "MinLength": 0,
                  "Name": "Description",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "Location Address",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6928,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 400,
                  "MinLength": 0,
                  "Name": "Address",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "geography",
                  "DefaultValue": null,
                  "Description": "Location Geo code",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6929,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 0,
                  "MinLength": 0,
                  "Name": "GeoCodes",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": true,
                  "Attributes": [],
                  "CannedListId": 1224,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "Category of location",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6930,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 400,
                  "MinLength": 0,
                  "Name": "Category",
                  "Range": null,
                  "RegexValidator": null
                }
              ],
              "PropertiesCount": 5,
              "Tags": null,
              "UtcDateCreated": "/Date(1334239795000+0000)/",
              "UtcLastUpdatedDate": "/Date(1334813150000+0000)/",
              "Version": null
            },
            "Comment": {
              "ArticleCount": 663133,
              "Attributes": [
                {
                  "Key": "displayName",
                  "Value": "Comment\r"
                },
                {
                  "Key": "property.groups",
                  "Value": "\r"
                },
                {
                  "Key": "property.positions",
                  "Value": "6932,0"
                },
                {
                  "Key": "identifier.name",
                  "Value": "\r"
                },
                {
                  "Key": "identifier.value",
                  "Value": "Comment\r"
                }
              ],
              "CreatedBy": "Test User",
              "Description": "User comment",
              "Id": 2190,
              "LastUpdatedBy": "Test User",
              "Name": "Comment",
              "Properties": [
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "text",
                  "DefaultValue": null,
                  "Description": "Comment",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6931,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 9223372036854776000,
                  "MinLength": 0,
                  "Name": "Text",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "Name of the person whose comment this is.",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6932,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 400,
                  "MinLength": 0,
                  "Name": "Name",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "text",
                  "DefaultValue": null,
                  "Description": "Photo of the person whose comment this is.",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6933,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 9223372036854776000,
                  "MinLength": 0,
                  "Name": "Photo",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [
                    {
                      "Key": "property.hideInListing",
                      "Value": "False\r"
                    },
                    {
                      "Key": "schema.input.type",
                      "Value": "ClearText\r"
                    },
                    {
                      "Key": "semantic.validation.message",
                      "Value": "\r"
                    },
                    {
                      "Key": "schema.semantic",
                      "Value": "None\r"
                    },
                    {
                      "Key": "position",
                      "Value": "0\r"
                    },
                    {
                      "Key": "group.id",
                      "Value": "0\r"
                    }
                  ],
                  "CannedListId": 0,
                  "DataType": "long",
                  "DefaultValue": "0",
                  "Description": "The number of times this comment has been marked helpful.",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": true,
                  "Id": 7046,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 0,
                  "MinLength": 0,
                  "Name": "Upvotes",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [
                    {
                      "Key": "property.hideInListing",
                      "Value": "False\r"
                    },
                    {
                      "Key": "schema.input.type",
                      "Value": "ClearText\r"
                    },
                    {
                      "Key": "semantic.validation.message",
                      "Value": "\r"
                    },
                    {
                      "Key": "schema.semantic",
                      "Value": "None\r"
                    },
                    {
                      "Key": "position",
                      "Value": "0\r"
                    },
                    {
                      "Key": "group.id",
                      "Value": "0\r"
                    }
                  ],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "The people who have given reviews for this comment.",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 7047,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 400,
                  "MinLength": 0,
                  "Name": "ReviewedBy",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": true,
                  "Attributes": [],
                  "CannedListId": 1232,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "A rating between 1 star and 5 stars.",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 7048,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 400,
                  "MinLength": 0,
                  "Name": "StarRating",
                  "Range": null,
                  "RegexValidator": null
                }
              ],
              "PropertiesCount": 6,
              "Tags": [
                "NULL"
              ],
              "UtcDateCreated": "/Date(1334239796000+0000)/",
              "UtcLastUpdatedDate": "/Date(1336115619000+0000)/",
              "Version": null
            },
            "Album": {
              "ArticleCount": 255112,
              "Attributes": [
                {
                  "Key": "displayName",
                  "Value": "Album\r"
                },
                {
                  "Key": "property.groups",
                  "Value": "\r"
                },
                {
                  "Key": "property.positions",
                  "Value": "6935,0"
                },
                {
                  "Key": "identifier.name",
                  "Value": "\r"
                },
                {
                  "Key": "identifier.value",
                  "Value": "Album\r"
                }
              ],
              "CreatedBy": "Test User",
              "Description": "Album",
              "Id": 2191,
              "LastUpdatedBy": "Test User",
              "Name": "Album",
              "Properties": [
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "Album name",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6934,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 400,
                  "MinLength": 0,
                  "Name": "Name",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "text",
                  "DefaultValue": null,
                  "Description": "Album description",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6935,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 9223372036854776000,
                  "MinLength": 0,
                  "Name": "Description",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "Images in Album",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 6936,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 400,
                  "MinLength": 0,
                  "Name": "Images",
                  "Range": null,
                  "RegexValidator": null
                }
              ],
              "PropertiesCount": 3,
              "Tags": null,
              "UtcDateCreated": "/Date(1334239796000+0000)/",
              "UtcLastUpdatedDate": "/Date(1334813423000+0000)/",
              "Version": null
            },
            "User": {
              "ArticleCount": 0,
              "Attributes": [
                {
                  "Key": "displayName",
                  "Value": "User\r"
                },
                {
                  "Key": "identifier.value",
                  "Value": "User\r"
                },
                {
                  "Key": "property.groups",
                  "Value": "\r"
                },
                {
                  "Key": "property.positions",
                  "Value": "7042,0"
                },
                {
                  "Key": "identifier.name",
                  "Value": "\r"
                }
              ],
              "CreatedBy": "Tushar Maini",
              "Description": "This Schema contains details about users who have interacted with the site.",
              "Id": 2235,
              "LastUpdatedBy": "Tushar Maini",
              "Name": "User",
              "Properties": [
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [
                    {
                      "Key": "property.hideInListing",
                      "Value": "False\r"
                    },
                    {
                      "Key": "schema.input.type",
                      "Value": "ClearText\r"
                    },
                    {
                      "Key": "semantic.validation.message",
                      "Value": "\r"
                    },
                    {
                      "Key": "schema.semantic",
                      "Value": "None\r"
                    },
                    {
                      "Key": "position",
                      "Value": "0\r"
                    },
                    {
                      "Key": "group.id",
                      "Value": "0\r"
                    }
                  ],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "This is the name of person.",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 7042,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 400,
                  "MinLength": 0,
                  "Name": "Username",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [
                    {
                      "Key": "property.hideInListing",
                      "Value": "False\r"
                    },
                    {
                      "Key": "schema.input.type",
                      "Value": "ClearText\r"
                    },
                    {
                      "Key": "semantic.validation.message",
                      "Value": "\r"
                    },
                    {
                      "Key": "schema.semantic",
                      "Value": "None\r"
                    },
                    {
                      "Key": "position",
                      "Value": "0\r"
                    },
                    {
                      "Key": "group.id",
                      "Value": "0\r"
                    }
                  ],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "The users public Facebook Profile.",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 7044,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 400,
                  "MinLength": 0,
                  "Name": "FacebookProfile",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [
                    {
                      "Key": "property.hideInListing",
                      "Value": "False\r"
                    },
                    {
                      "Key": "schema.input.type",
                      "Value": "ClearText\r"
                    },
                    {
                      "Key": "semantic.validation.message",
                      "Value": "\r"
                    },
                    {
                      "Key": "schema.semantic",
                      "Value": "None\r"
                    },
                    {
                      "Key": "position",
                      "Value": "0\r"
                    },
                    {
                      "Key": "group.id",
                      "Value": "0\r"
                    }
                  ],
                  "CannedListId": 0,
                  "DataType": "geography",
                  "DefaultValue": null,
                  "Description": "This is user's location.",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 7045,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 0,
                  "MinLength": 0,
                  "Name": "Location",
                  "Range": null,
                  "RegexValidator": null
                }
              ],
              "PropertiesCount": 3,
              "Tags": null,
              "UtcDateCreated": "/Date(1336107338000+0000)/",
              "UtcLastUpdatedDate": "/Date(1336107638000+0000)/",
              "Version": null
            }
          }
        }
      }
    },
    "KjqRW4fIa0uNIMJgHxm6KjQzKfcbleEhR3vQsJuf4Zk=": {
      "Blueprints": {
        "__D_362_DeploymentsBlueprint": {
          "Attributes": [],
          "CreatedBy": "demoadmin ",
          "Description": "Blueprint social",
          "Id": 389,
          "LastUpdatedBy": "demoadmin ",
          "Name": "__D_362_DeploymentsBlueprint",
          "Tags": null,
          "UtcDateCreated": "/Date(1342671720000+0000)/",
          "UtcLastUpdatedDate": "/Date(1342671720000+0000)/",
          "Relations": {
            "ProfileComment": {
              "Attributes": [
                {
                  "Key": "property.groups",
                  "Value": ""
                },
                {
                  "Key": "property.positions",
                  "Value": ""
                },
                {
                  "Key": "property.identifier",
                  "Value": ""
                }
              ],
              "ConnectionCount": 0,
              "CreatedBy": "demoadmin ",
              "Description": "This represents Comment relation.",
              "EndPointA": {
                "Label": "Profile",
                "Multiplicity": -1,
                "SchemaId": 3471
              },
              "EndPointB": {
                "Label": "Comment",
                "Multiplicity": -1,
                "SchemaId": 3473
              },
              "Id": 2245,
              "LastUpdatedBy": "demoadmin ",
              "Name": "ProfileComment",
              "Properties": [],
              "PropertiesCount": 0,
              "Tags": null,
              "UtcDateCreated": "/Date(1342671721000+0000)/",
              "UtcLastUpdatedDate": "/Date(1342671721000+0000)/"
            },
            "PhotoComment": {
              "Attributes": [
                {
                  "Key": "property.groups",
                  "Value": ""
                },
                {
                  "Key": "property.positions",
                  "Value": ""
                },
                {
                  "Key": "property.identifier",
                  "Value": ""
                }
              ],
              "ConnectionCount": 0,
              "CreatedBy": "demoadmin ",
              "Description": "This represents PhotoComment relation.",
              "EndPointA": {
                "Label": "Photo",
                "Multiplicity": -1,
                "SchemaId": 3472
              },
              "EndPointB": {
                "Label": "Comment",
                "Multiplicity": -1,
                "SchemaId": 3473
              },
              "Id": 2246,
              "LastUpdatedBy": "demoadmin ",
              "Name": "PhotoComment",
              "Properties": [],
              "PropertiesCount": 0,
              "Tags": null,
              "UtcDateCreated": "/Date(1342671721000+0000)/",
              "UtcLastUpdatedDate": "/Date(1342671721000+0000)/"
            },
            "ProfilePicture": {
              "Attributes": [
                {
                  "Key": "property.groups",
                  "Value": ""
                },
                {
                  "Key": "property.positions",
                  "Value": ""
                },
                {
                  "Key": "property.identifier",
                  "Value": ""
                }
              ],
              "ConnectionCount": 0,
              "CreatedBy": "demoadmin ",
              "Description": "This represents ProfilePicture relation.",
              "EndPointA": {
                "Label": "Profile",
                "Multiplicity": -1,
                "SchemaId": 3471
              },
              "EndPointB": {
                "Label": "File",
                "Multiplicity": -1,
                "SchemaId": 3470
              },
              "Id": 2247,
              "LastUpdatedBy": "demoadmin ",
              "Name": "ProfilePicture",
              "Properties": [],
              "PropertiesCount": 0,
              "Tags": null,
              "UtcDateCreated": "/Date(1342671721000+0000)/",
              "UtcLastUpdatedDate": "/Date(1342671721000+0000)/"
            }
          },
          "Schemas": {
            "File": {
              "ArticleCount": 0,
              "Attributes": [],
              "CreatedBy": "System",
              "Description": "This schema is a system generated schema and used for file/media storage. It cannot be deleted/edited because doing so will break the functinality of file/media upload/download.",
              "Id": 3470,
              "LastUpdatedBy": "System",
              "Name": "File",
              "Properties": [
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "File name of the uploaded file",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 9128,
                  "IsImmutable": false,
                  "IsMandatory": true,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 0,
                  "MinLength": 0,
                  "Name": "FileName",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "blob",
                  "DefaultValue": null,
                  "Description": "Download url of the uploaded file",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 9129,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 0,
                  "MinLength": 0,
                  "Name": "Url",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "Content type of the uploaded file",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 9130,
                  "IsImmutable": false,
                  "IsMandatory": true,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 0,
                  "MinLength": 0,
                  "Name": "ContentType",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "long",
                  "DefaultValue": null,
                  "Description": "Size of the uploaded file in bits",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 9131,
                  "IsImmutable": false,
                  "IsMandatory": true,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 0,
                  "MinLength": 0,
                  "Name": "Size",
                  "Range": null,
                  "RegexValidator": null
                }
              ],
              "PropertiesCount": 4,
              "Tags": [
                "FileUpload",
                "System"
              ],
              "UtcDateCreated": "/Date(1342671720000+0000)/",
              "UtcLastUpdatedDate": "/Date(1342671720000+0000)/",
              "Version": null
            },
            "Profile": {
              "ArticleCount": 0,
              "Attributes": [
                {
                  "Key": "property.groups",
                  "Value": ""
                },
                {
                  "Key": "property.positions",
                  "Value": ""
                },
                {
                  "Key": "property.identifier",
                  "Value": ""
                }
              ],
              "CreatedBy": "demoadmin ",
              "Description": "This represents Profile schema.",
              "Id": 3471,
              "LastUpdatedBy": "demoadmin ",
              "Name": "Profile",
              "Properties": [],
              "PropertiesCount": 0,
              "Tags": null,
              "UtcDateCreated": "/Date(1342671721000+0000)/",
              "UtcLastUpdatedDate": "/Date(1342671721000+0000)/",
              "Version": null
            },
            "Photo": {
              "ArticleCount": 0,
              "Attributes": [
                {
                  "Key": "property.groups",
                  "Value": ""
                },
                {
                  "Key": "property.positions",
                  "Value": ""
                },
                {
                  "Key": "property.identifier",
                  "Value": ""
                }
              ],
              "CreatedBy": "demoadmin ",
              "Description": "This represents Photo schema.",
              "Id": 3472,
              "LastUpdatedBy": "demoadmin ",
              "Name": "Photo",
              "Properties": [],
              "PropertiesCount": 0,
              "Tags": null,
              "UtcDateCreated": "/Date(1342671721000+0000)/",
              "UtcLastUpdatedDate": "/Date(1342671721000+0000)/",
              "Version": null
            },
            "Comment": {
              "ArticleCount": 0,
              "Attributes": [
                {
                  "Key": "property.groups",
                  "Value": ""
                },
                {
                  "Key": "property.positions",
                  "Value": ""
                },
                {
                  "Key": "property.identifier",
                  "Value": ""
                }
              ],
              "CreatedBy": "demoadmin ",
              "Description": "This represents Commenet schema.",
              "Id": 3473,
              "LastUpdatedBy": "demoadmin ",
              "Name": "Comment",
              "Properties": [],
              "PropertiesCount": 0,
              "Tags": null,
              "UtcDateCreated": "/Date(1342671721000+0000)/",
              "UtcLastUpdatedDate": "/Date(1342671721000+0000)/",
              "Version": null
            }
          }
        },
        "__D_357_DeploymentsBlueprint": {
          "Attributes": [],
          "CreatedBy": "demoadmin ",
          "Description": "Blueprint B2",
          "Id": 380,
          "LastUpdatedBy": "demoadmin ",
          "Name": "__D_357_DeploymentsBlueprint",
          "Tags": null,
          "UtcDateCreated": "/Date(1342434137000+0000)/",
          "UtcLastUpdatedDate": "/Date(1342434137000+0000)/",
          "Schemas": {
            "File": {
              "ArticleCount": 2,
              "Attributes": [],
              "CreatedBy": "System",
              "Description": "This schema is a system generated schema and used for file/media storage. It cannot be deleted/edited because doing so will break the functinality of file/media upload/download.",
              "Id": 3441,
              "LastUpdatedBy": "System",
              "Name": "File",
              "Properties": [
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "File name of the uploaded file",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 9070,
                  "IsImmutable": false,
                  "IsMandatory": true,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 0,
                  "MinLength": 0,
                  "Name": "FileName",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "blob",
                  "DefaultValue": null,
                  "Description": "Download url of the uploaded file",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 9071,
                  "IsImmutable": false,
                  "IsMandatory": false,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 0,
                  "MinLength": 0,
                  "Name": "Url",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "string",
                  "DefaultValue": null,
                  "Description": "Content type of the uploaded file",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 9072,
                  "IsImmutable": false,
                  "IsMandatory": true,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 0,
                  "MinLength": 0,
                  "Name": "ContentType",
                  "Range": null,
                  "RegexValidator": null
                },
                {
                  "AreValuesFromCannedList": false,
                  "Attributes": [],
                  "CannedListId": 0,
                  "DataType": "long",
                  "DefaultValue": null,
                  "Description": "Size of the uploaded file in bits",
                  "Encryption": 0,
                  "Formatter": null,
                  "HasDefaultValue": false,
                  "Id": 9073,
                  "IsImmutable": false,
                  "IsMandatory": true,
                  "IsMultiValued": false,
                  "IsUnique": false,
                  "MaxLength": 0,
                  "MinLength": 0,
                  "Name": "Size",
                  "Range": null,
                  "RegexValidator": null
                }
              ],
              "PropertiesCount": 4,
              "Tags": [
                "FileUpload",
                "System"
              ],
              "UtcDateCreated": "/Date(1342434137000+0000)/",
              "UtcLastUpdatedDate": "/Date(1342434137000+0000)/",
              "Version": null
            },
            "USer": {
              "ArticleCount": 0,
              "Attributes": [
                {
                  "Key": "property.groups",
                  "Value": ""
                },
                {
                  "Key": "property.positions",
                  "Value": ""
                },
                {
                  "Key": "property.identifier",
                  "Value": ""
                }
              ],
              "CreatedBy": "demoadmin ",
              "Description": "This represents USer schema.",
              "Id": 3442,
              "LastUpdatedBy": "demoadmin ",
              "Name": "USer",
              "Properties": [],
              "PropertiesCount": 0,
              "Tags": null,
              "UtcDateCreated": "/Date(1342434138000+0000)/",
              "UtcLastUpdatedDate": "/Date(1342434138000+0000)/",
              "Version": null
            },
            "LEad": {
              "ArticleCount": 0,
              "Attributes": [
                {
                  "Key": "property.groups",
                  "Value": ""
                },
                {
                  "Key": "property.positions",
                  "Value": ""
                },
                {
                  "Key": "property.identifier",
                  "Value": ""
                }
              ],
              "CreatedBy": "demoadmin ",
              "Description": "This represents LEad schema.",
              "Id": 3443,
              "LastUpdatedBy": "demoadmin ",
              "Name": "LEad",
              "Properties": [],
              "PropertiesCount": 0,
              "Tags": null,
              "UtcDateCreated": "/Date(1342434138000+0000)/",
              "UtcLastUpdatedDate": "/Date(1342434138000+0000)/",
              "Version": null
            },
            "Comment": {
              "ArticleCount": 0,
              "Attributes": [
                {
                  "Key": "property.groups",
                  "Value": ""
                },
                {
                  "Key": "property.positions",
                  "Value": ""
                },
                {
                  "Key": "property.identifier",
                  "Value": ""
                }
              ],
              "CreatedBy": "demoadmin ",
              "Description": "This represents Comment schema.",
              "Id": 3444,
              "LastUpdatedBy": "demoadmin ",
              "Name": "Comment",
              "Properties": [],
              "PropertiesCount": 0,
              "Tags": null,
              "UtcDateCreated": "/Date(1342434138000+0000)/",
              "UtcLastUpdatedDate": "/Date(1342434138000+0000)/",
              "Version": null
            }
          }
        }
      }
    }
  }
}